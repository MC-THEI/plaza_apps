import { StyleSheet, View } from 'react-native';
import Mapbox, {
  Camera,
  CircleLayer,
  Images,
  Image,
  LocationPuck,
  MapView,
  ShapeSource,
  SymbolLayer,
} from '@rnmapbox/maps';
import { GlobalStyles } from '../../constants/styles';
import { featureCollection, point } from '@turf/helpers';
import { useAppDispatch, useAppSelector } from '../../store/redux/store';
import { markers, setCameraPosition } from '../../store/redux/map';
import usePulsatingCircle from '../../hooks/usePulsatingCircle';

function Map() {
  const { cameraPosition } = useAppSelector((state) => state.map);
  const dispatch = useAppDispatch();

  const circleRadius = usePulsatingCircle(17, 20, 1000);

  Mapbox.setAccessToken(
    'pk.eyJ1IjoicGxhemFob3RlbHMiLCJhIjoiY20xZXRzbXIzMnU2cDJrc2pqbHVuZTF5aSJ9.LGe_kovpnas3HgPRwe8Kew'
  );

  const points = markers.map((marker) => point(marker.coordinates));

  return (
    <View style={styles.mapContainer}>
      <MapView
        style={styles.map}
        styleURL={'mapbox://styles/plazahotels/clfflk2kz000j01mq9a6vfisf'}
        attributionEnabled={false}
        logoEnabled={false}
        compassEnabled={false}
        scaleBarEnabled={false}
      >
        <Images>
          <Image name="topImage">
            <View
              style={{
                width: 16,
                height: 16,
                borderRadius: 8,
                backgroundColor: GlobalStyles.colors.successGreen_primary,
              }}
            />
          </Image>
        </Images>
        <Camera
          zoomLevel={cameraPosition.zoomLevel}
          centerCoordinate={cameraPosition.centerCoordinate}
          padding={{
            paddingBottom: 50,
            paddingLeft: 50,
            paddingRight: 50,
            paddingTop: 50,
          }}
        />

        <LocationPuck
          topImage="topImage"
          visible={true}
          scale={['interpolate', ['linear'], ['zoom'], 10, 1.0, 20, 4.0]}
          pulsing={{
            isEnabled: true,
            color: GlobalStyles.colors.successGreen_primary,
            radius: 40.0,
          }}
        />
        {/* */}
        <ShapeSource
          id="objects"
          cluster={true}
          clusterRadius={50}
          shape={featureCollection(points)}
          onPress={(e) => {
            const properties = e.features[0].properties;
            const coords = e.features[0].geometry;

            if (properties.point_count) {
              dispatch(
                setCameraPosition({
                  zoomLevel: 5,
                  centerCoordinate: [
                    coords.coordinates[0],
                    coords.coordinates[1],
                  ],
                })
              );
            } else {
              dispatch(
                setCameraPosition({
                  zoomLevel: 12,
                  centerCoordinate: [
                    coords.coordinates[0],
                    coords.coordinates[1],
                  ],
                })
              );
            }
          }}
        >
          <CircleLayer
            id="clusters"
            filter={['has', 'point_count']}
            style={{
              circleColor: GlobalStyles.colors.accentGold,
              circleRadius: circleRadius,
            }}
          />

          <SymbolLayer
            id="clusters-count"
            style={{
              textField: ['get', 'point_count'], // Dynamische Anzeige der Punktanzahl
              textSize: 12,
              textColor: '#000000',
              textHaloWidth: 1,
              textPitchAlignment: 'map',
            }}
          />

          <SymbolLayer
            id="hotelIcons"
            filter={['!', ['has', 'point_count']]}
            style={{
              iconImage: 'marker',
              iconSize: 0.8,
              iconAnchor: 'bottom',
            }}
          />

          <Images
            images={{ marker: require('../../assets/images/marker.png') }}
          />
        </ShapeSource>
      </MapView>
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
    width: '100%',
  },
});
