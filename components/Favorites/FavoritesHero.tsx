import ScreenHeader from '../../ui/ScreenHeader';
import { Image, StyleSheet } from 'react-native';
import MainTitle from '../Home/MainTitle';
import { mainTitleFavorites } from '../../assets/languages';

function FavoritesHero() {
  return (
    <ScreenHeader bgImg="favorite" isUrl={false}>
      <Image
        style={styles.logo}
        source={require('../../assets/images/plaza-logo-weiss.png')}
      />

      <MainTitle title={mainTitleFavorites[1]} />
    </ScreenHeader>
  );
}

export default FavoritesHero;

const styles = StyleSheet.create({
  logo: {
    marginLeft: 20,
    marginTop: 50,
    width: 130,
    height: 70,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 10,
  },
});
