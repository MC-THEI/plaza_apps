import { StatusBar } from 'expo-status-bar';
import MapList from '../components/Map/MapList';
import Map from '../components/Map/Map';
import MapToolBar from '../components/Map/MapToolBar';
import { useAppDispatch } from '../store/redux/store';
import {
  getObjectsThunk,
  resetMapStates,
  setMapChanging,
} from '../store/redux/map';
import { View } from 'react-native';

function MapScreen() {
  const dispatch = useAppDispatch();

  dispatch(setMapChanging(true));
  dispatch(resetMapStates());
  dispatch(getObjectsThunk());

  return (
    <>
      <StatusBar style="dark" />
      <View style={{ backgroundColor: 'white' }}>
        <Map />
        <MapToolBar />
        <MapList />
      </View>
    </>
  );
}

export default MapScreen;
