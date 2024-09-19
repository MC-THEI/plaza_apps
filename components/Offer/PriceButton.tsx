import { View, StyleSheet } from 'react-native';
import MainButton from '../../ui/MainButton';
import { searchButtonsTitle } from '../../assets/languages';

function PriceButton() {
  return (
    <View style={styles.buttonOuterContainer}>
      <View style={styles.buttonInnerContainer}>
        <MainButton title={'ab 100€'} />
      </View>
    </View>
  );
}

export default PriceButton;

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
