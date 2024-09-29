import { IOffer } from '../types/OfferTypes';
import { useAppSelector } from '../store/redux/store';

const useOffers = () => {
  const {
    currentOfferId,
    offers,
  }: { currentOfferId: number | null; offers: IOffer[] } = useAppSelector(
    (state) => state.offers
  );

  return { currentOfferId, offers };
};

export default useOffers;
