import getData from '../getData';
import {
  HOTELS_URL,
  HOTEL_URL,
  OFFERS_URL,
  OFFER_URL,
} from '../../constants/constants';
import { fetchHotelsAndOffersFromDb } from '../database/databaseService';
import { addHotels } from '../../store/redux/hotels';
import { addOffers } from '../../store/redux/offers';

export async function getDataFromApi(currentLanguage: number) {
  const offers = await getData(OFFERS_URL, OFFER_URL, currentLanguage);
  const hotels = await getData(HOTELS_URL, HOTEL_URL, currentLanguage);

  return { offers, hotels };
}

export async function loadAndDispatchHotelAndOfferData(dispatch: any) {
  const { hotelsJSON, offersJSON } = await fetchHotelsAndOffersFromDb();

  if (hotelsJSON && offersJSON) {
    const hotels = JSON.parse((hotelsJSON[0] as any).hotels);
    const offers = JSON.parse((offersJSON[0] as any).offers);

    dispatch(addHotels(hotels));
    dispatch(addOffers(offers));
  }
}
