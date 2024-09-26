import { useState, useEffect, useCallback } from 'react';
import { ACCESS_TOKEN, HOST } from '../constants/constants';
import { useAppDispatch } from '../store/redux/store';
import { IOffer } from '../types/OfferTypes';
import { IHotel } from '../types/HotelTypes';
// import { getFullImageUrl } from "../utils/helper";

type FetchDataHook<T> = {
  data: T[] | null;
  loading: boolean;
  error: string | null;
};

const fetchDetails = async (
  hotelKeys: string[],
  language: number,
  objectsURL: string
): Promise<IHotel[] | IOffer[]> => {
  const hotelFetchPromises = hotelKeys.map((key) =>
    fetch(
      `${HOST}${objectsURL}Id=${key}&clangId=${language}&token=${ACCESS_TOKEN}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP-Error: ${response.status}`);
        }

        const result = response.json();
        return result as Promise<IHotel>;
      })
      .catch((error) => {
        console.error(`Error when retrieving ID ${key}:`, error);
        return null; // Incorrect requests are marked as null here
      })
  );

  const hotelResults = await Promise.allSettled(hotelFetchPromises);

  return hotelResults
    .filter(
      (result): result is PromiseFulfilledResult<IHotel> =>
        result.status === 'fulfilled' && result.value !== null
    )
    .map((result) => result.value);
};

const useFetchData = <T extends IOffer | IHotel>(
  initialURL: string,
  objectsURL: string,
  language?: number,
  setLanguage?: (lang: number) => void
): FetchDataHook<T> => {
  const [data, setData] = useState<T[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const dispatch = useAppDispatch();

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const fetchAllData = useCallback(async () => {
    setLoading(true);

    try {
      await delay(1000);

      //  const langFromDB = await getData(1, 'language');
      const currentLanguage = 1;

      //  if (!langFromDB) {
      //    setLanguage(1);
      //    clearData('language');
      //    saveData({ id: 1, language: 1 }, 'language');
      //  } else {
      //    setLanguage(currentLanguage);
      //  }

      const response = await fetch(
        `${HOST}${initialURL}&token=${ACCESS_TOKEN}`
      );
      if (!response.ok) {
        throw new Error(`HTTP-Error: ${response.status}`);
      }

      const result = await response.json();
      if (result && typeof result === 'object') {
        const objects = await fetchDetails(
          Object.keys(result),
          currentLanguage,
          objectsURL
        );

        if (loading) setData(objects as T[] | null);
      }
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  }, [initialURL, objectsURL]);

  useEffect(() => {
    fetchAllData();
  }, [fetchAllData]);

  return { data, loading, error };
};

export default useFetchData;
