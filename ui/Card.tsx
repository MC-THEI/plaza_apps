import { View, StyleSheet, Text, Image, Pressable } from 'react-native';
import { GlobalStyles } from '../constants/styles';
import { useNavigation } from '@react-navigation/native';

function Card({ onPress }: { onPress: () => void }) {
  const navigation = useNavigation();

  function handlePressCard() {
    onPress();
  }

  return (
    <Pressable style={styles.container} onPress={() => handlePressCard()}>
      <View style={styles.iconLogoContainer}>
        <Image
          style={styles.iconLogo}
          source={{
            uri: 'https://placehold.co/50.png',
          }}
        />
      </View>
      <View style={styles.textContainer}>
        <Text
          style={styles.hotelNameText}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          Best Western Plus Plaza Berlin Kurfürstendamm
        </Text>
        <View style={styles.locationContainer}>
          <Text style={styles.locationIcon}>L</Text>
          <Text style={styles.locationText}>
            DE – <Text style={styles.locationText}>Berlin</Text>
          </Text>
        </View>
      </View>
      <View style={styles.iconLogoContainer}>
        <Image
          style={styles.favIcon}
          source={{
            uri: 'https://placehold.co/50.png',
          }}
        />
      </View>
    </Pressable>
  );
}

export default Card;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: GlobalStyles.colors.accentGold,
    height: 170,
    width: 280,
    borderRadius: 10,
    marginRight: 15,
    shadowColor: GlobalStyles.colors.neutralGray_dark,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  iconLogoContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 12,
  },
  textContainer: {
    marginLeft: 12,
    marginTop: 5,
  },
  locationContainer: {
    flexDirection: 'row',
  },
  locationIcon: {
    marginRight: 5,
  },
  hotelNameText: {
    fontFamily: 'lato-v16-latin-700',
    fontSize: GlobalStyles.fontSize.cardFontSize,
    color: 'white',
  },
  locationText: {
    fontFamily: 'lato-v16-latin-700',
  },
  iconLogo: {
    width: 35,
    height: 35,
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,
  },
  favIcon: {
    width: 35,
    height: 35,
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,
  },
});
