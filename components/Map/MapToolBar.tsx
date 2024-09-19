import { View, StyleSheet } from 'react-native';
import SearchInput from './SearchInput';
import MapButton from './MapButton';

function MapToolBar() {
  return (
    <View style={styles.container}>
      <View style={styles.inputBtnContainer}>
        <SearchInput />
        <MapButton iconName={'location-map'} />
        <MapButton iconName={'fullscreen'} />
      </View>
    </View>
  );
}

export default MapToolBar;

const styles = StyleSheet.create({
  container: {
    height: 70,
  },
  inputBtnContainer: {
    position: 'absolute',
    top: -25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    width: '100%',
  },
});
