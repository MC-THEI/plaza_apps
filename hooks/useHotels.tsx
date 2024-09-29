import { useAppSelector } from '../store/redux/store';
import { IHotel } from '../types/HotelTypes';

const useHotels = () => {
  const {
    currentHotelId,
    hotels,
  }: { currentHotelId: number | null; hotels: IHotel[] } = useAppSelector(
    (state) => state.hotels
  );

  return { currentHotelId, hotels };
};

export default useHotels;
