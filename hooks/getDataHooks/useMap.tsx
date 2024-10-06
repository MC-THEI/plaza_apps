import { useAppSelector } from '../../store/redux/store';
import { IHotel } from '../../types/HotelTypes';
import { IOffer } from '../../types/OfferTypes';

const useMap = () => {
  const {
    cameraPosition,
    selectedMapList,
    visibleObjects,
    searchInputValue,
    filteredObjects,
    isMapChanging,
    userLocation,
  }: {
    cameraPosition: { zoomLevel: number; centerCoordinate: number[] };
    selectedMapList: string;
    visibleObjects: IHotel[] | IOffer[];
    searchInputValue: string;
    filteredObjects: IHotel[] | IOffer[];
    isMapChanging: boolean;
    userLocation: number[] | null;
  } = useAppSelector((state) => state.map);

  return {
    cameraPosition,
    selectedMapList,
    visibleObjects,
    searchInputValue,
    filteredObjects,
    isMapChanging,
    userLocation,
  };
};

export default useMap;
