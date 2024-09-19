import { StatusBar } from 'expo-status-bar';
import MapList from '../components/Map/MapList';
import Map from '../components/Map/Map';
import MapToolBar from '../components/Map/MapToolBar';

function MapScreen() {
  return (
    <>
      <StatusBar style="dark" />
      <Map />
      <MapToolBar />
      <MapList />
    </>
  );
}

export default MapScreen;
