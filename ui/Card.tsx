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
import {
  getCountryCode,
  getCurrentObject,
  getFullImageUrl,
} from '../utils/helper';
import useHotels from '../hooks/useHotels';
import React from 'react';

function Card({
  cardType,
  cardData,
  onPress,
  fullSize,
}: {
  cardType: string;
  cardData: IHotel | IOffer;
  onPress: () => void;
  fullSize?: boolean;
}) {
  const { hotels } = useHotels();

  const offerHotel = useMemo(() => {
    if (cardType === NavigationTypes.Offer) {
      return getCurrentObject(hotels, (cardData as IOffer).hotel.id);
    }
    return null;
  }, [cardType, cardData, hotels]);

  const hotelCard = cardType === NavigationTypes.Hotel;

  const cardLocation = useMemo(
    () => (
      <Text style={styles.locationText}>
        {hotelCard ? cardData.location?.city : offerHotel?.location?.city}
      </Text>
    ),
    [hotelCard, cardData, offerHotel]
  );

  const countryCode = useMemo(
    () =>
      getCountryCode(
        hotelCard ? cardData.location?.country : offerHotel?.location?.country
      ),
    [hotelCard, cardData, offerHotel]
  );

  const cardImage = useMemo(
    () =>
      cardData.titlePicture !== '' &&
      cardData.titlePicture !== null &&
      cardData.titlePicture
        ? { uri: getFullImageUrl(cardData.titlePicture) }
        : require('../assets/images/fallbacks/4_3-image-fallback.png'),
    [cardData]
  );

  const favName = cardType === NavigationTypes.Hotel ? 'Hotel' : 'Offer';
  const facIcon = <FavoriteIcon size={26} id={cardData.id} favName={favName} />;

  function handlePressCard() {
    onPress();
  }

  return (
    <Pressable
      style={[styles.container, fullSize && styles.fullSize]}
      onPress={handlePressCard}
    >
      <ImageBackground
        style={styles.innerContainer}
        source={cardImage}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
      >
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
              {countryCode} {cardLocation}
            </Text>
          </View>
        </View>
        <View style={styles.iconLogoContainer}>{facIcon}</View>
      </ImageBackground>
    </Pressable>
  );
}

export default React.memo(Card);

let cardWidth = 280;
const aspectRatio = 170 / 280;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: cardWidth * aspectRatio,
    width: cardWidth,
    marginRight: 15,
    shadowColor: GlobalStyles.colors.neutralGray_dark,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  innerContainer: {
    backgroundColor: GlobalStyles.colors.neutralGray_dark,
    flex: 1,
    justifyContent: 'space-between',
    borderRadius: 10,
    overflow: 'hidden',
  },
  backgroundImage: {
    opacity: 0.35,
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
    color: GlobalStyles.colors.accentGold,
    fontSize: 15,
  },
  hotelNameText: {
    fontFamily: 'lato-v16-latin-700',
    fontSize: GlobalStyles.fontSize.cardFontSize,
    color: 'white',
  },
  locationText: {
    fontFamily: 'lato-v16-latin-700',
    color: GlobalStyles.colors.accentGold,
    fontSize: GlobalStyles.fontSize.cardFontSize,
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
  fullSize: {
    width: '100%',
    height: 200,
  },
});
