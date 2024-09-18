import { View, StyleSheet } from 'react-native';
import MainButton from '../../ui/MainButton';

function SearchButtons() {
  return (
    <View style={styles.buttonOuterContainer}>
      <View style={styles.buttonInnerContainer}>
        <MainButton title="Hotel suchen" />
        <MainButton title="Angebot suchen" />
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
