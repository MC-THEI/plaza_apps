import { StyleSheet, Text, View } from 'react-native';
import Mapbox, {
  Camera,
  CircleLayer,
  Images,
  Image,
  MapView,
  ShapeSource,
  SymbolLayer,
} from '@rnmapbox/maps';

import { GlobalStyles } from '../../constants/styles';
import { featureCollection, point } from '@turf/helpers';
import { useAppDispatch } from '../../store/redux/store';
import { setCameraPosition, setMapChanging } from '../../store/redux/map';
import usePulsatingCircle from '../../hooks/mapHooks/usePulsatingCircle';
import useMap from '../../hooks/getDataHooks/useMap';
import useHotels from '../../hooks/getDataHooks/useHotels';
import { NavigationTypes } from '../../types/NavigationTypes';
import { getCurrentObject } from '../../utils/helper';
import { IOffer } from '../../types/OfferTypes';
import { useEffect, useRef, useState } from 'react';
import useZoomIntoCluster from '../../hooks/mapHooks/useZoomIntoCluster';
import useUpdateVisibleHotels from '../../hooks/mapHooks/useUpdateVisibleHotels';
import useFitBounds from '../../hooks/mapHooks/useFitBounds';

function Map() {
  // const circleRadius = usePulsatingCircle(17, 20, 1000);
  const cameraRef = useRef(null);
  const mapRef = useRef(null);
  const dispatch = useAppDispatch();
  const {
    selectedMapList,
    cameraPosition,
    filteredObjects,
    searchInputValue,
    userLocation,
  } = useMap();
  const { hotels } = useHotels();
  const { zoomIntoCluster } = useZoomIntoCluster();
  const { fitBounds } = useFitBounds(cameraRef);
  const { updateVisibleHotels } = useUpdateVisibleHotels();

  function getOffers(objects: IOffer[]) {
    return objects.map((offer) => getCurrentObject(hotels, offer.hotel.id));
  }

  const pointList =
    selectedMapList === NavigationTypes.Offer
      ? getOffers(filteredObjects as IOffer[])
      : filteredObjects;

  const points = pointList.map((obj) =>
    point([obj.location.longitude, obj.location.latitude])
  );

  Mapbox.setAccessToken(
    'pk.eyJ1IjoicGxhemFob3RlbHMiLCJhIjoiY20xZXRzbXIzMnU2cDJrc2pqbHVuZTF5aSJ9.LGe_kovpnas3HgPRwe8Kew'
  );

  /* Handler Functions */
  function handleMapIdle(region: any) {
    const visibleBounds = region.properties.bounds;
    const centerPosition = region.properties.center;
    const bounds = {
      ne: visibleBounds.ne,
      sw: visibleBounds.sw,
    };
    updateVisibleHotels(bounds, centerPosition);
  }

  function handlePressCluster(e: any) {
    const feature = e.features[0];
    const properties = feature.properties;

    if (properties.point_count) {
      zoomIntoCluster(feature);
    } else {
      const coords = e.features[0].geometry.coordinates;
      dispatch(
        setCameraPosition({
          zoomLevel: 11,
          centerCoordinate: coords,
        })
      );
    }
  }

  function handleTouchStart() {
    setTimeout(() => {
      dispatch(setMapChanging(true));
    }, 300);
  }

  useEffect(() => {
    if (searchInputValue !== '' && filteredObjects.length > 0) {
      const filteredCoordinates = filteredObjects.map((obj) => {
        return [obj.location.longitude, obj.location.latitude];
      });

      fitBounds(filteredCoordinates);
    }
  }, [filteredObjects, searchInputValue]);

  return (
    <View style={styles.mapContainer}>
      <MapView
        ref={mapRef}
        style={styles.map}
        styleURL={'mapbox://styles/plazahotels/clfflk2kz000j01mq9a6vfisf'}
        attributionEnabled={false}
        logoEnabled={false}
        compassEnabled={false}
        scaleBarEnabled={false}
        scrollEnabled={true}
        onTouchStart={() => handleTouchStart()}
        onMapIdle={(region) => handleMapIdle(region)}
        onCameraChanged={() => dispatch(setMapChanging(true))}
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
          ref={cameraRef}
          zoomLevel={cameraPosition.zoomLevel}
          centerCoordinate={cameraPosition.centerCoordinate}
          animationDuration={700}
          animationMode={'easeTo'}
          maxZoomLevel={13}
          padding={{
            paddingBottom: 50,
            paddingLeft: 50,
            paddingRight: 50,
            paddingTop: 50,
          }}
        />

        <ShapeSource
          id="objects"
          cluster={true}
          clusterRadius={50}
          shape={featureCollection(points)}
          onPress={(e) => {
            handlePressCluster(e);
          }}
        >
          {/*Cluster and Markers*/}

          <CircleLayer
            id="clusters"
            filter={['has', 'point_count']}
            style={{
              circleColor: GlobalStyles.colors.accentGold,
              circleRadius: 20,
              /* circleRadius: circleRadius,*/
            }}
          />
          <SymbolLayer
            id="clusters-count"
            style={{
              textField: ['get', 'point_count'],
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
            images={{
              marker:
                selectedMapList === NavigationTypes.Hotel
                  ? require('../../assets/images/marker.png')
                  : require('../../assets/images/offermarker.png'),
            }}
          />
        </ShapeSource>

        {/*User marker*/}
        {userLocation && (
          <ShapeSource id="userLocationSource" shape={point(userLocation)}>
            <SymbolLayer
              id="UserMarker"
              style={{
                iconImage: 'userMarker',
                iconSize: 0.8,
                iconAnchor: 'bottom',
              }}
            />

            <Images
              images={{
                userMarker: require('../../assets/images/usermarker.png'),
              }}
            />
          </ShapeSource>
        )}
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
