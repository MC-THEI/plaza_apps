import { View, StyleSheet, Text, Pressable, Platform } from 'react-native';
import { GlobalStyles } from '../constants/styles';
import { useNavigation } from '@react-navigation/native';
import { NavigationTypes } from '../types/NavigationTypes';
import { IcoMoon_mci, IcoMoon_pwai } from './IcoMoon';
import FavoriteIcon from './FavoriteIcon';

function NavBtn({
  BtnName,
  onPress,
  children,
}: {
  BtnName: string;
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
  const navigation = useNavigation();

  function handleClickNavBtn(navName: NavigationTypes) {
    navigation.navigate(navName);
  }

  function handleClickBack() {
    if (navigation.canGoBack()) navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <NavBtn
        BtnName="Home"
        onPress={() => handleClickNavBtn(NavigationTypes.Home)}
      >
        <IcoMoon_pwai
          name="home"
          size={22}
          color={GlobalStyles.colors.accentGold}
        />
      </NavBtn>

      <NavBtn BtnName="Back" onPress={() => handleClickBack()}>
        <IcoMoon_mci
          name="chevron-left"
          size={22}
          color={GlobalStyles.colors.accentGold}
        />
      </NavBtn>
      <NavBtn
        BtnName="Favorites"
        onPress={() => handleClickNavBtn(NavigationTypes.Favorite)}
      >
        <FavoriteIcon size={22} />
      </NavBtn>
      <NavBtn
        BtnName="Map"
        onPress={() => handleClickNavBtn(NavigationTypes.Map)}
      >
        <IcoMoon_pwai
          name="search"
          size={22}
          color={GlobalStyles.colors.accentGold}
        />
      </NavBtn>
      <NavBtn BtnName="DE" onPress={() => {}}>
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
