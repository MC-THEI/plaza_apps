import ScreenHeader from '../../ui/ScreenHeader';
import MainTitle from '../Home/MainTitle';
import { Image, StyleSheet, View } from 'react-native';
import FavoriteIcon from '../../ui/FavoriteIcon';
import HotelMenuButtons from './HotelMenuButtons';
import useHotels from '../../hooks/useHotels';
import { getCurrentObject, getFullImageUrl } from '../../utils/helper';

function HotelHero() {
  const { hotels, currentHotelId } = useHotels();
  const currentHotel = getCurrentObject(hotels, currentHotelId);

  const image =
    currentHotel?.titlePicturePortrait !== '' &&
    currentHotel?.titlePicturePortrait !== null
      ? currentHotel?.titlePicturePortrait
      : currentHotel?.titlePicture;

  return (
    <ScreenHeader bgImg={getFullImageUrl(image)} isUrl={true}>
      <MainTitle
        title={{
          mainTitle: 'Best Western Plus Plaza Berlin Kurfürstendamm',
        }}
        fontSize={{ fontSize: 35 }}
        height={{ height: '60%' }}
      />
      <Image
        style={styles.logo}
        source={{ uri: 'https://placehold.co/50.png' }}
      />
      <View style={styles.favoriteIcon}>
        <FavoriteIcon size={30} />
      </View>
      <HotelMenuButtons />
    </ScreenHeader>
  );
}

export default HotelHero;

const styles = StyleSheet.create({
  logo: {
    borderRadius: 50,
    width: 50,
    height: 50,
    position: 'absolute',
    top: 50,
    left: 20,
  },
  favoriteIcon: {
    position: 'absolute',
    top: 50,
    right: 20,
  },
});
