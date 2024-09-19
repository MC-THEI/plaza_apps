import ScreenHeader from '../../ui/ScreenHeader';
import { Image, StyleSheet } from 'react-native';
import MainTitle from '../Home/MainTitle';

function OfferHero() {
  return (
    <ScreenHeader
      bgImg={'https://preview.plazahotels.de/media/210_dz-komfort.jpg'}
      isUrl={true}
      height={400}
    >
      <Image
        style={styles.logo}
        source={{ uri: 'https://placehold.co/50.png' }}
      />

      <MainTitle
        title={{ mainTitle: 'Plaza Weekend Angebot' }}
        height={{ height: '60%' }}
      />
    </ScreenHeader>
  );
}

export default OfferHero;

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
