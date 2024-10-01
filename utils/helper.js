import { HOST } from '../constants/constants';
import { Alert, Linking } from 'react-native';

const Font = require('expo-font');
export const loadFonts = () =>
  Font.loadAsync({
    'lato-v16-latin-100': require('../assets/fonts/lato/lato-v16-latin-100.ttf'),
    'lato-v16-latin-300': require('../assets/fonts/lato/lato-v16-latin-300.ttf'),
    'lato-v16-latin-700': require('../assets/fonts/lato/lato-v16-latin-700.ttf'),
    'lato-v16-latin-900': require('../assets/fonts/lato/lato-v16-latin-900.ttf'),
    'lato-v16-latin-regular': require('../assets/fonts/lato/lato-v16-latin-regular.ttf'),
    IcoMoon_pwai: require('../assets/fonts/icomoon/pwai/PLAZA-PWA.ttf'),
    IcoMoon_mci: require('../assets/fonts/icomoon/mci/plazahotels.ttf'),
  });

export function getFullImageUrl(imagePath) {
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }

  if (imagePath.startsWith('/')) {
    return `${HOST}${imagePath}`;
  }

  return imagePath;
}

export const countryToCode = {
  Deutschland: 'DE',
  Germany: 'DE',
  Österreich: 'AT',
  Austria: 'AT',
  Schweiz: 'CH',
  Switzerland: 'CH',
  Frankreich: 'FR',
  France: 'FR',
  Niederlande: 'NL',
  Netherlands: 'NL',
  Italien: 'IT',
  Italy: 'IT',
  Spanien: 'ES',
  Spain: 'ES',
  UK: 'GB',
  UnitedKingdom: 'GB',
  Polen: 'PL',
  Poland: 'PL',
};

export function getCountryCode(country) {
  if (country) {
    return `${countryToCode[country]}–`;
  } else {
    return '';
  }
}

export function getCurrentObject(objects, currentId) {
  return objects.find((obj) => obj.id === currentId);
}

export function filterObjectsByIds(objects, currentIds) {
  return objects.filter((hotels) => currentIds.includes(hotels.id));
}

export function splitLastWord(text) {
  if (typeof text !== 'string' || text.trim() === '') {
    return { lastWord: '', restOfText: '' };
  }

  const trimmedText = text.trim();
  const words = trimmedText.split(' ');
  const lastWord = words.pop();
  const restOfText = words.join(' ');

  return {
    lastWord,
    restOfText,
  };
}

export async function sendEmail(url) {
  const mailTo = `mailto:${url}`;

  try {
    const supported = await Linking.canOpenURL(mailTo);
    if (!supported) {
      Alert.alert('Error', 'Email is not available');
      return;
    }

    await Linking.openURL(mailTo);
  } catch (err) {
    console.log(err);
  }
}

export const saveImagesAsBlob = async (hotels) => {
  for (const hotel of hotels) {
    if (hotel.titlepicture) {
      // Lade das Bild herunter und konvertiere es in Base64
      const imagePath = `${RNFS.DocumentDirectoryPath}/${hotel.titlepicture.split('/').pop()}`;
      await RNFS.downloadFile({
        fromUrl: hotel.titlepicture,
        toFile: imagePath,
      }).promise;

      // Konvertiere das Bild in Base64
      const base64Image = await RNFS.readFile(imagePath, 'base64');

      // Speichere das Bild als BLOB in der Datenbank
      db.transaction((tx) => {
        tx.executeSql(
          'INSERT INTO hoteles (title, titlepicture) VALUES (?, ?)',
          [hotel.title, base64Image],
          (tx, results) => {
            console.log(`Inserted hotel: ${hotel.title}`);
          },
          (tx, error) => {
            console.error(`Failed to insert hotel: ${error.message}`);
          }
        );
      });
    }
  }
};
