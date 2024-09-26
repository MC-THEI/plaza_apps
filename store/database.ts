import * as SQLite from 'expo-sqlite';
import { IHotel } from '../types/HotelTypes';
import { IOffer } from '../types/OfferTypes';

async function openDatabase() {
  return await SQLite.openDatabaseAsync('plaza.db');
}

const hotelsTable = `
  CREATE TABLE IF NOT EXISTS hotels (
    hotels JSON NOT NULL
  );
`;

const offersTable = `
  CREATE TABLE IF NOT EXISTS offers (
    offers JSON NOT NULL
  );
`;

export const createTable = async (tableName: string) => {
  const db = await openDatabase();
  try {
    await db.execAsync(tableName === 'hotels' ? hotelsTable : offersTable);
    console.log('Tables created successfully');
  } catch (error) {
    console.error('Error creating tables: ', error);
  }
};

export const getDataFromDb = async (tableName: string) => {
  const db = await openDatabase();
  const data = await db.getAllAsync(`SELECT * FROM ${tableName}`);
  return data;
};

export const insertData = async (
  data: IHotel[] | IOffer[],
  tableName: string
) => {
  const db = await openDatabase();
  const result = await db.runAsync(
    `INSERT INTO ${tableName} (${tableName}) VALUES (?)`,
    [JSON.stringify(data)]
  );
  console.log('Place inserted successfully', result);
  return result.lastInsertRowId;
};

export const clearTable = async (tableName: string) => {
  const db = await openDatabase();
  const result = await db.runAsync(`DELETE FROM ${tableName}`);
  console.log('Table cleared successfully', result);
  return result;
};
