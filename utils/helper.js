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
