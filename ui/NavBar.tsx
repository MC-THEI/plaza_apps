import { View, StyleSheet, Text, Pressable, Platform } from 'react-native';
import { GlobalStyles } from '../constants/styles';
import { useNavigation } from '@react-navigation/native';
import { NavigationTypes } from '../types/NavigationTypes';
import { IcoMoon_mci, IcoMoon_pwai } from './IcoMoon';
import useFavorites from '../hooks/getDataHooks/useFavorites';
import { useAppDispatch } from '../store/redux/store';
import { setSelectedMapList } from '../store/redux/map';

function NavBtn({
  onPress,
  children,
}: {
  onPress: () => void;
  children: React.ReactNode;
}) {
  return (
    <Pressable style={styles.buttonsContainer} onPress={onPress}>
      <View style={styles.button}>{children}</View>
    </Pressable>
  );
}

function NavBar() {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const { favoritesOfferIds, favoritesHotelIds } = useFavorites();

  const areFavorites =
    favoritesOfferIds.length > 0 || favoritesHotelIds.length > 0;

  function handleClickNavBtn(navName: NavigationTypes) {
    //dispatch(setSelectedMapList(NavigationTypes.Hotel));
    (navigation.navigate as (routeName: string) => void)(navName);
  }

  function handleClickBack() {
    if (navigation.canGoBack()) navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <NavBtn onPress={() => handleClickNavBtn(NavigationTypes.Home)}>
        <IcoMoon_pwai
          name="home"
          size={22}
          color={GlobalStyles.colors.accentGold}
        />
      </NavBtn>

      <NavBtn onPress={() => handleClickBack()}>
        <IcoMoon_mci
          name="chevron-left"
          size={22}
          color={GlobalStyles.colors.accentGold}
        />
      </NavBtn>
      <NavBtn onPress={() => handleClickNavBtn(NavigationTypes.Favorite)}>
        <IcoMoon_pwai
          name={areFavorites ? 'heart' : 'heart-contour'}
          size={22}
          color={GlobalStyles.colors.accentRed}
        />
      </NavBtn>
      <NavBtn onPress={() => handleClickNavBtn(NavigationTypes.Map)}>
        <IcoMoon_pwai
          name="search"
          size={22}
          color={GlobalStyles.colors.accentGold}
        />
      </NavBtn>
      <NavBtn onPress={() => {}}>
        <Text style={styles.langButton}>DE</Text>
      </NavBtn>
    </View>
  );
}

export default NavBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: Platform.select({ ios: 80, android: 70 }),
    paddingHorizontal: Platform.select({ ios: 20, android: 0 }),
    backgroundColor: GlobalStyles.colors.neutralGray_dark,
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
  },
  button: {
    alignItems: 'center',
    color: GlobalStyles.colors.accentGold,
    fontSize: 23,
    width: '100%',
  },
  langButton: {
    color: GlobalStyles.colors.accentGold,
    fontSize: 20,
    fontFamily: 'lato-v16-latin-700',
    textTransform: 'uppercase',
  },
});
