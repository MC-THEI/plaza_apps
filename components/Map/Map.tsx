import { StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

function Map() {
  return (
    <View style={styles.mapContainer}>
      <Text>Map</Text>
    </View>
  );
}

export default Map;

const styles = StyleSheet.create({
  mapContainer: {
    height: '40%',
    backgroundColor: GlobalStyles.colors.neutralGray_light,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
