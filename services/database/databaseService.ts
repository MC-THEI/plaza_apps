import {
  clearTable,
  createTable,
  getDataFromDb,
  insertData,
} from '../../store/database';
import { IHotel } from '../../types/HotelTypes';
import { IOffer } from '../../types/OfferTypes';

export async function initializeDatabaseTables() {
  await createTable('hotels');
  await createTable('offers');
}

export async function clearDatabaseTables() {
  await clearTable('hotels');
  await clearTable('offers');
}

export async function insertHotelsData(hotels: IHotel[]) {
  await insertData(hotels, 'hotels');
}

export async function insertOffersData(offers: IOffer[]) {
  await insertData(offers, 'offers');
}

export async function fetchHotelsAndOffersFromDb() {
  const hotelsJSON = await getDataFromDb('hotels');
  const offersJSON = await getDataFromDb('offers');
  return { hotelsJSON, offersJSON };
}

export async function setupAndPopulateDatabase(
  hotels: IHotel[],
  offers: IOffer[]
) {
  await initializeDatabaseTables();
  await clearDatabaseTables();
  await insertHotelsData(hotels);
  await insertOffersData(offers);
}
