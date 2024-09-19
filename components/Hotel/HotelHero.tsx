import ScreenHeader from '../../ui/ScreenHeader';
import MainTitle from '../Home/MainTitle';
import { Image, StyleSheet } from 'react-native';
import FavoriteIcon from '../../ui/FavoriteIcon';
import HotelMenuButtons from './HotelMenuButtons';

function HotelHero() {
  return (
    <ScreenHeader
      bgImg={'https://preview.plazahotels.de/media/210_dz-komfort.jpg'}
      isUrl={true}
    >
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
      <FavoriteIcon style={{}} />
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
});
