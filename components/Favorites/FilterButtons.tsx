import { View, StyleSheet } from 'react-native';
import MainButton from '../../ui/MainButton';
import { filterButtonsTitle } from '../../assets/languages';

function FilterButtons() {
  return (
    <View style={styles.buttonOuterContainer}>
      <View style={styles.buttonInnerContainer}>
        <MainButton title={filterButtonsTitle.hotels[1]} />
        <MainButton title={filterButtonsTitle.offers[1]} />
      </View>
    </View>
  );
}

export default FilterButtons;

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
