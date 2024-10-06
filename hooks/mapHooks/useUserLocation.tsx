import { useState, useCallback } from 'react';
import { Alert } from 'react-native';
import * as Location from 'expo-location';
import { useDispatch } from 'react-redux';
import { setCameraPosition, setUserLocation } from '../../store/redux/map';
import useMap from '../getDataHooks/useMap';
import { gpsAlert } from '../../assets/languages';

const useUserLocation = () => {
  const [isLoadingUserLocation, setIsLoadingUserLocation] = useState(false);
  const { userLocation } = useMap();
  const dispatch = useDispatch();

  const handleUserLocation = useCallback(async () => {
    if (userLocation === null) {
      try {
        setIsLoadingUserLocation(true);
        const status = await Location.requestForegroundPermissionsAsync();
        if (status.status !== 'granted') {
          throw new Error(gpsAlert[1].message);
        }
        let location = await Location.getCurrentPositionAsync({});
        const userPosition = [
          location.coords.longitude,
          location.coords.latitude,
        ];

        dispatch(setUserLocation(userPosition));
        dispatch(
          setCameraPosition({
            zoomLevel: 14,
            centerCoordinate: userPosition,
          })
        );
        setIsLoadingUserLocation(false);
      } catch (error) {
        Alert.alert(gpsAlert[1].title, gpsAlert[1].message, [
          {
            text: 'OK',
            onPress: () => {
              setIsLoadingUserLocation(false);
            },
          },
        ]);
      }
    } else {
      dispatch(
        setCameraPosition({
          zoomLevel: 14,
          centerCoordinate: userLocation,
        })
      );
    }
  }, [dispatch, gpsAlert, userLocation]);

  return {
    isLoadingUserLocation,
    handleUserLocation,
  };
};

export default useUserLocation;
