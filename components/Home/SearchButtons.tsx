import { View, StyleSheet } from 'react-native';
import MainButton from '../../ui/MainButton';
import { searchButtonsTitle } from '../../assets/languages';

function SearchButtons() {
  return (
    <View style={styles.buttonOuterContainer}>
      <View style={styles.buttonInnerContainer}>
        <MainButton title={searchButtonsTitle.hotels[1]} />
        <MainButton title={searchButtonsTitle.offers[1]} />
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
