import { useAppSelector } from '../store/redux/store';

const useFavorites = () => {
  const {
    favoritesHotelIds,
    favoritesOfferIds,
    hotelsBtnActivated,
    offersBtnActivated,
  }: {
    favoritesHotelIds: number[];
    favoritesOfferIds: number[];
    hotelsBtnActivated: boolean;
    offersBtnActivated: boolean;
  } = useAppSelector((state) => state.favorites);

  return {
    favoritesHotelIds,
    favoritesOfferIds,
    hotelsBtnActivated,
    offersBtnActivated,
  };
};

export default useFavorites;
