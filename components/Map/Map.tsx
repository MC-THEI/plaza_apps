import { StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import Mapbox from '@rnmapbox/maps';

function Map() {
  Mapbox.setAccessToken(
    'pk.eyJ1IjoicGxhemFob3RlbHMiLCJhIjoiY2p6MTI4emx5MGhlbjNna245MTVwdDR0NiJ9.C5wKHhbeIX9mOLUq2Tiutg'
  );

  return (
    <View style={styles.mapContainer}>
      <Mapbox.MapView style={styles.map} />
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
  map: {
    flex: 1,
  },
});
