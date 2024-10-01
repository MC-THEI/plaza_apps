import ScreenHeader from '../../ui/ScreenHeader';
import { StyleSheet, Image, View } from 'react-native';
import MainTitle from '../Home/MainTitle';
import { getCurrentObject, getFullImageUrl } from '../../utils/helper';
import useOffers from '../../hooks/useOffers';
import FavoriteIcon from '../../ui/FavoriteIcon';
import { NavigationTypes } from '../../types/NavigationTypes';

function OfferHero() {
  const { currentOfferId, offers } = useOffers();
  const currentOffer = getCurrentObject(offers, currentOfferId);

  return (
    <ScreenHeader
      bgImg={getFullImageUrl(currentOffer?.titlePicture)}
      isUrl={true}
      height={400}
    >
      <Image
        style={styles.logo}
        source={{ uri: 'https://placehold.co/50.png' }}
      />

      <MainTitle
        title={{ mainTitle: currentOffer?.name }}
        height={{ height: '60%' }}
      />
      <View style={styles.favoriteIcon}>
        <FavoriteIcon
          size={30}
          id={currentOffer.id}
          favName={NavigationTypes.Offer}
        />
      </View>
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
  favoriteIcon: {
    position: 'absolute',
    top: 50,
    right: 20,
  },
});
