import ScreenHeader from '../../ui/ScreenHeader';
import { Image, View, StyleSheet } from 'react-native';
import MainTitle from './MainTitle';
import { mainTitleHome } from '../../assets/languages';
import { IcoMoon_pwai } from '../../ui/IcoMoon';
import { GlobalStyles } from '../../constants/styles';

function HomeHero() {
  return (
    <ScreenHeader bgImg="home" isUrl={false}>
      <Image
        style={styles.logo}
        source={require('../../assets/images/plaza-logo-weiss.png')}
      />

      <MainTitle title={mainTitleHome[1]} />

      {/* Icon */}
      <View style={styles.iconContainer}>
        <IcoMoon_pwai
          name="search"
          size={45}
          color={GlobalStyles.colors.accentGold}
        />
      </View>
    </ScreenHeader>
  );
}

export default HomeHero;

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
  iconContainer: {
    position: 'absolute',
    bottom: 70,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});
