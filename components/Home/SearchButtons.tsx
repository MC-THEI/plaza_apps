import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch } from '../../store/redux/store';
import { searchButtonsTitle } from '../../assets/languages';
import { setSelectedMapList } from '../../store/redux/map';
import { NavigationTypes } from '../../types/NavigationTypes';
import MainButton from '../../ui/MainButton';

function SearchButtons() {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  function handlePress(type: NavigationTypes) {
    dispatch(setSelectedMapList(type));
    (navigation.navigate as (routeName: string) => void)(NavigationTypes.Map);
  }

  return (
    <View style={styles.buttonOuterContainer}>
      <View style={styles.buttonInnerContainer}>
        <MainButton
          title={searchButtonsTitle.hotels[1]}
          onPress={() => handlePress(NavigationTypes.Hotel)}
        />
        <MainButton
          title={searchButtonsTitle.offers[1]}
          onPress={() => handlePress(NavigationTypes.Offer)}
        />
      </View>
    </View>
  );
}

export default SearchButtons;

const styles = StyleSheet.create({
  buttonOuterContainer: {},
  buttonInnerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
    gap: 10,
    top: -25,
  },
});
