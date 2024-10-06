import ScreenHeader from '../../ui/ScreenHeader';
import { Image, StyleSheet, Pressable, View } from 'react-native';
import MainTitle from './MainTitle';
import { mainTitleHome } from '../../assets/languages';
import { IcoMoon_pwai } from '../../ui/IcoMoon';
import { GlobalStyles } from '../../constants/styles';
import { useAppDispatch } from '../../store/redux/store';
import { useNavigation } from '@react-navigation/native';
import { NavigationTypes } from '../../types/NavigationTypes';
import { setSelectedMapList } from '../../store/redux/map';

function HomeHero() {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  function handlePress() {
    dispatch(setSelectedMapList(NavigationTypes.Hotel));
    (navigation.navigate as (routeName: string) => void)(NavigationTypes.Map);
  }

  return (
    <ScreenHeader bgImg="home" isUrl={false}>
      <Pressable onPress={() => navigation.openDrawer()}>
        <BurgerMenu />
      </Pressable>
      <Image
        style={styles.logo}
        source={require('../../assets/images/plaza-logo-weiss.png')}
      />

      <MainTitle title={mainTitleHome[1]} />

      {/* Icon */}
      <Pressable style={styles.iconContainer} onPress={handlePress}>
        <IcoMoon_pwai
          name="search"
          size={45}
          color={GlobalStyles.colors.accentGold}
        />
      </Pressable>
    </ScreenHeader>
  );
}

export default HomeHero;

function BurgerMenu() {
  return (
    <View style={styles.burger}>
      <View style={styles.bar}></View>
      <View style={styles.bar}></View>
      <View style={styles.bar}></View>
    </View>
  );
}

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
  bar: {
    width: 35,
    height: 6,
    backgroundColor: GlobalStyles.colors.accentGold,
    borderRadius: 2,
    marginBottom: 5,
  },
  burger: {
    position: 'absolute',
    top: 70,
    right: 20,
  },
});
