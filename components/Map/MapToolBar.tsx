import { View, StyleSheet } from 'react-native';
import SearchInput from './SearchInput';
import MapButton from './MapButton';
import { useAppDispatch } from '../../store/redux/store';
import {
  centerMap,
  getObjectsThunk,
  setMapChanging,
} from '../../store/redux/map';

import useUserLocation from '../../hooks/mapHooks/useUserLocation';

function MapToolBar() {
  const dispatch = useAppDispatch();
  const { isLoadingUserLocation, handleUserLocation } = useUserLocation();

  function handleCenterMap() {
    dispatch(centerMap());
    dispatch(getObjectsThunk());
    dispatch(setMapChanging(true));
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputBtnContainer}>
        <SearchInput />
        <MapButton
          iconName={isLoadingUserLocation ? 'loading' : 'location-map'}
          onPress={handleUserLocation}
          isLoading={isLoadingUserLocation}
        />
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
