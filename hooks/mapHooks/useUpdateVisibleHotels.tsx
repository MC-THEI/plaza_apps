import { useCallback } from 'react';
import { debounce } from 'lodash';
import { useAppDispatch } from '../../store/redux/store';
import { NavigationTypes } from '../../types/NavigationTypes';
import { getCurrentObject } from '../../utils/helper';
import { setMapChanging, setVisibleObjects } from '../../store/redux/map';
import useMap from '../getDataHooks/useMap';
import useHotels from '../getDataHooks/useHotels';
import { getDistance } from 'geolib';
import { IHotel } from '../../types/HotelTypes';
import { IOffer } from '../../types/OfferTypes';

function useUpdateVisibleHotels() {
  const dispatch = useAppDispatch();
  const { filteredObjects, selectedMapList } = useMap();
  const { hotels } = useHotels();

  const getObjectForOffer = (offer: IOffer) => {
    if (selectedMapList === NavigationTypes.Offer) {
      return getCurrentObject(hotels, offer.hotel.id);
    }
    return offer;
  };

  const getDistanceFromCenter = (obj: IHotel, centerPosition: number[]) => {
    return getDistance(
      { ...centerPosition },
      {
        latitude: obj.location.latitude,
        longitude: obj.location.longitude,
      }
    );
  };

  // Debounced function to update visible hotels
  const updateVisibleHotelsDebounced = useCallback(
    debounce((bounds, centerPosition) => {
      const { ne, sw } = bounds;

      // Filter offers within the map bounds
      const filteredOffers = filteredObjects
        .filter((offer) => {
          const object = getObjectForOffer(offer);
          const { latitude, longitude } = object.location;
          return (
            longitude >= sw[0] &&
            longitude <= ne[0] &&
            latitude >= sw[1] &&
            latitude <= ne[1]
          );
        })
        .sort((a, b) => {
          const distanceA = getDistanceFromCenter(
            getObjectForOffer(a),
            centerPosition
          );
          const distanceB = getDistanceFromCenter(
            getObjectForOffer(b),
            centerPosition
          );
          return distanceA - distanceB;
        });

      // Dispatch actions to update the store
      dispatch(setMapChanging(false));
      dispatch(setVisibleObjects(filteredOffers));
    }, 200),
    [dispatch, filteredObjects, hotels, selectedMapList]
  );

  return { updateVisibleHotels: updateVisibleHotelsDebounced };
}

export default useUpdateVisibleHotels;
