import { View, StyleSheet } from 'react-native';
import SearchInput from './SearchInput';
import MapButton from './MapButton';
import { useAppDispatch } from '../../store/redux/store';
import { centerMap, setCameraPosition } from '../../store/redux/map';
import * as Location from 'expo-location';

function MapToolBar() {
  const dispatch = useAppDispatch();

  async function handleUserLocation() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Zugriff auf den Standort verweigert');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});

    dispatch(
      setCameraPosition({
        zoomLevel: 14,
        centerCoordinate: [location.coords.longitude, location.coords.latitude],
      })
    );
  }

  function handleCenterMap() {
    dispatch(centerMap());
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputBtnContainer}>
        <SearchInput />
        <MapButton iconName={'location-map'} onPress={handleUserLocation} />
        <MapButton iconName={'fullscreen'} onPress={handleCenterMap} />
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
