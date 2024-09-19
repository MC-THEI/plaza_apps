import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

const deviceWidth = Dimensions.get('window').width;

function Subtitle() {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subTitleText}>PLaza Weekend Offer</Text>
      <Text style={styles.subTitleText}>Best Western Hotel Braunschweig</Text>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  subtitleContainer: {
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: GlobalStyles.colors.neutralGray_dark,
    zIndex: -1,
  },
  subTitleText: {
    fontSize: deviceWidth > 500 ? 22 : 20,
    color: 'white',
  },
});
