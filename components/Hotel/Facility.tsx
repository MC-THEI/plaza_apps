import { View, StyleSheet, Text } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import { IcoMoon_mci } from '../../ui/IcoMoon';

function Facility() {
  return (
    <View style={styles.container}>
      <IcoMoon_mci
        name={'info'}
        color={GlobalStyles.colors.accentGold}
        size={22}
      />
    </View>
  );
}

export default Facility;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: GlobalStyles.colors.neutralGray_dark,
    width: 56,
    height: 56,
    borderRadius: 6,
    marginRight: 22,
  },
});
