import {
  View,
  StyleSheet,
  Text,
  Image,
  Pressable,
  ImageBackground,
} from 'react-native';
import { useMemo } from 'react';
import { GlobalStyles } from '../constants/styles';
import FavoriteIcon from './FavoriteIcon';
import { IHotel } from '../types/HotelTypes';
import { IOffer } from '../types/OfferTypes';
import { NavigationTypes } from '../types/NavigationTypes';
import { IcoMoon_pwai } from './IcoMoon';
import { getCountryCode } from '../utils/helper';
import { useAppSelector } from '../store/redux/store';

function Card({
  cardType,
  cardData,
  onPress,
}: {
  cardType: string;
  cardData: IHotel | IOffer;
  onPress: () => void;
}) {
  function handlePressCard() {
    onPress();
  }

  const { hotels } = useAppSelector((state) => state.hotels);

  const offerHotel = useMemo(() => {
    if (cardType === NavigationTypes.Offer) {
      return hotels.find(
        (hotel) => (hotel as IHotel).id === (cardData as IOffer).hotel.id
      );
    }
    return null;
  }, [cardType, cardData, hotels]);

  const hotelCard = cardType === NavigationTypes.Hotel;

  const cardLocation = (
    <Text style={styles.locationText}>
      {hotelCard ? cardData.location?.city : offerHotel.location?.city}
    </Text>
  );

  const countryCode = getCountryCode(
    hotelCard ? cardData.location?.country : offerHotel.location?.country
  );

  console.log(cardData);

  return (
    <Pressable style={styles.container} onPress={() => handlePressCard()}>
      <ImageBackground>
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
            {cardData.name}
          </Text>
          <View style={styles.locationContainer}>
            <IcoMoon_pwai
              style={styles.locationIcon}
              name="marker"
              color={GlobalStyles.colors.neutralGray_dark}
            />
            <Text style={styles.locationText}>
              {countryCode}
              <Text style={styles.locationText}>{cardLocation}</Text>
            </Text>
          </View>
        </View>
        <View style={styles.iconLogoContainer}>
          <FavoriteIcon size={26} />
        </View>
      </ImageBackground>
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
    marginBottom: 12,
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
    marginTop: 3,
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
