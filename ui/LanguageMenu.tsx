import {
  Text,
  StyleSheet,
  Platform,
  Dimensions,
  Animated,
  Easing,
  Pressable,
} from 'react-native';
import { GlobalStyles } from '../constants/styles';
import { useEffect, useRef } from 'react';
import useLanguage from '../hooks/getDataHooks/useLanguage';
import { useAppDispatch } from '../store/redux/store';
import { setCurrentLanguage, toggleMenu } from '../store/redux/languages';
import { availableLanguages } from '../constants/constants';
import { storeDataInAsyncStorage } from '../services/setDataToAsyncStorage';

const windowWidth = Dimensions.get('window').width;

function LanguageMenu() {
  const { isOpenMenu } = useLanguage();
  const animationValue = useRef(new Animated.Value(-windowWidth / 5)).current;

  const dispatch = useAppDispatch();
  const { currentLanguage } = useLanguage();

  useEffect(() => {
    Animated.timing(animationValue, {
      toValue: isOpenMenu
        ? 0
        : -windowWidth / 5 - (platformValue !== undefined ? platformValue : 0),
      duration: 300,
      useNativeDriver: false,
      easing: Easing.out(Easing.ease),
    }).start();
  }, [isOpenMenu]);

  async function onPress() {
    dispatch(toggleMenu());
    const lang = currentLanguage === 1 ? 2 : 1;
    dispatch(setCurrentLanguage(lang));
    await storeDataInAsyncStorage('language', lang);
  }

  return (
    <Animated.View
      style={[
        styles.container,
        {
          right: animationValue,
        },
      ]}
    >
      <Pressable style={styles.innerContainer} onPress={onPress}>
        <Text style={styles.text}>
          {availableLanguages[currentLanguage === 1 ? 2 : 1].toUpperCase()}
        </Text>
      </Pressable>
    </Animated.View>
  );
}

export default LanguageMenu;

const platformValue = Platform.select({ ios: 30, android: 0 });

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: Platform.select({ ios: 80, android: 70 }),
    right: 0,
    backgroundColor: GlobalStyles.colors.accentGold,
    width: windowWidth / 5 + (platformValue !== undefined ? platformValue : 0),
    height: 70,
  },
  innerContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: GlobalStyles.colors.neutralGray_dark,
    fontSize: Platform.select({ ios: 20, android: 21 }),
    fontFamily: 'lato-v16-latin-700',
  },
});
