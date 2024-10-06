import {
  Image,
  View,
  StyleSheet,
  Pressable,
  Text,
  Platform,
} from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import { IcoMoon_mci, IcoMoon_pwai } from '../IcoMoon';
import FavoriteIcon from '../FavoriteIcon';
import { IHotel } from '../../types/HotelTypes';
import { IOffer } from '../../types/OfferTypes';
import {
  getCountryCode,
  getCurrentObject,
  getFullImageUrl,
} from '../../utils/helper';
import useHotels from '../../hooks/getDataHooks/useHotels';
import { NavigationTypes } from '../../types/NavigationTypes';
import { useNavigation } from '@react-navigation/native';
import { setCurrentHotel } from '../../store/redux/hotels';
import { useAppDispatch } from '../../store/redux/store';
import { setCurrentOffer } from '../../store/redux/offers';
import { SEARCHTERMS } from '../../constants/constants';

function ListItem({
  item,
  bgColor,
  listType,
}: {
  item: IHotel | IOffer;
  bgColor: string;
  listType: NavigationTypes;
}) {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const { hotels } = useHotels();

  const iconLogo =
    listType === NavigationTypes.Hotel ? (
      <Image source={{ uri: 'https://placehold.co/50.png' }} />
    ) : (
      <IcoMoon_pwai name={'gift'} color={'white'} size={16} />
    );

  const offerHotel =
    listType === NavigationTypes.Offer &&
    getCurrentObject(hotels, (item as IOffer).hotel?.id);

  const city =
    listType === NavigationTypes.Hotel
      ? item.location?.city
      : offerHotel.location?.city;

  const country =
    listType === NavigationTypes.Hotel
      ? item.location?.country
      : offerHotel.location?.country;

  function handlePress() {
    if (listType === NavigationTypes.Hotel) {
      dispatch(setCurrentHotel(item.id as number));
      (navigation.navigate as (routeName: string) => void)(
        NavigationTypes.Hotel
      );
    }
    if (listType === NavigationTypes.Offer) {
      dispatch(setCurrentOffer(item.id as number));
      (navigation.navigate as (routeName: string) => void)(
        NavigationTypes.Offer
      );
    }
  }

  function HighlightedText({ text }: { text: string }) {
    const getHighlightedText = (text: string) => {
      const words = text.split(' ');
      return words.map((word, index) => {
        const isHighlighted = SEARCHTERMS.some((term) =>
          word.toLowerCase().includes(term.toLowerCase())
        );

        return (
          <Text
            key={index}
            style={isHighlighted ? styles.highlight : styles.textName}
          >
            {word}{' '}
          </Text>
        );
      });
    };

    return <Text style={styles.textName}>{getHighlightedText(text)}</Text>;
  }

  return (
    <Pressable
      style={[
        styles.container,
        {
          backgroundColor:
            bgColor === 'dark' ? GlobalStyles.colors.neutralWhite : 'white',
        },
      ]}
      onPress={() => handlePress()}
    >
      <View
        style={[
          styles.iconContainer,
          listType === NavigationTypes.Offer && styles.iconContainerOffer,
        ]}
      >
        {iconLogo}
      </View>
      <View style={styles.imgTextContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: getFullImageUrl(item.titlePicture),
            }}
            resizeMode="cover"
          />
        </View>
        <View style={styles.textContainer}>
          <View>
            {/*<Text style={styles.textName}>{item.name}</Text>*/}
            <HighlightedText text={item.name} />
            <View style={styles.locationContainer}>
              <IcoMoon_mci
                name="marker"
                color={GlobalStyles.colors.accentGold}
                size={15}
              />
              <Text style={styles.locationText}>
                {getCountryCode(country)}
                {city}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.favBtnContainer}>
        <FavoriteIcon
          color={GlobalStyles.colors.accentGold}
          size={23}
          id={item.id}
          favName={
            listType === NavigationTypes.Hotel
              ? NavigationTypes.Hotel
              : NavigationTypes.Offer
          }
        />
      </View>
    </Pressable>
  );
}

export default ListItem;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: 87,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    position: 'absolute',
    top: 0,
    left: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    width: 30,
    height: 26,
    backgroundColor: GlobalStyles.colors.neutralWhite,
    zIndex: 1,
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,
  },
  iconContainerOffer: {
    backgroundColor: GlobalStyles.colors.successGreen_primary,
  },
  imgTextContainer: {
    flexDirection: 'row',
  },
  imageContainer: {
    width: '30%',
    height: '100%',
  },

  image: {
    width: '100%',
    height: '97%',
  },
  textContainer: {
    width: '60%',
    padding: 10,
    justifyContent: 'center',
  },
  textName: {
    fontSize: Platform.select({ ios: 13, android: 14 }),
    fontFamily: 'lato-v16-latin-700',
    textTransform: 'uppercase',
  },
  locationText: {
    fontFamily: 'lato-v16-latin-700',
    color: GlobalStyles.colors.neutralGray_light,
  },
  locationContainer: {
    flexDirection: 'row',
  },
  favBtnContainer: {
    height: '100%',
    width: '10%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10,
    paddingRight: 10,
  },
  highlight: {
    color: GlobalStyles.colors.accentGold,
  },
});
