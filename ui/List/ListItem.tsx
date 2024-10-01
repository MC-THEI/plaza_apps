import { Image, View, StyleSheet, Pressable, Text } from 'react-native';
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
import useHotels from '../../hooks/useHotels';

function ListItem({
  item,
  bgColor,
  listType,
}: {
  item: IHotel | IOffer;
  bgColor: string;
  listType: 'hotel' | 'offer';
}) {
  const { hotels } = useHotels();

  const iconLogo =
    listType === 'hotel' ? (
      <Image source={{ uri: 'https://placehold.co/50.png' }} />
    ) : (
      <IcoMoon_pwai name={'gift'} color={'white'} size={16} />
    );

  const offerHotel =
    listType === 'offer' && getCurrentObject(hotels, item.hotel?.id);

  const city =
    listType === 'hotel' ? item.location?.city : offerHotel.location?.city;

  const country =
    listType === 'hotel'
      ? item.location?.country
      : offerHotel.location?.country;

  return (
    <Pressable
      style={[
        styles.container,
        {
          backgroundColor:
            bgColor === 'dark' ? GlobalStyles.colors.neutralWhite : 'white',
        },
      ]}
    >
      <View
        style={[
          styles.iconContainer,
          listType === 'offer' && styles.iconContainerOffer,
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
            <Text style={styles.textName}>{item.name}</Text>
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
          size={20}
          id={item.id}
          favName={listType === 'hotel' ? 'Hotel' : 'Offer'}
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
    width: 120,
    height: '100%',
  },

  image: {
    width: '100%',
    height: '97%',
  },
  textContainer: {
    padding: 10,
    justifyContent: 'center',
  },
  textName: {
    fontSize: GlobalStyles.fontSize.listFontSize,
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
    width: 50,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10,
    paddingRight: 10,
  },
});
