import {
  getDataFromAsyncStorage,
  storeDataInAsyncStorage,
} from '../setDataToAsyncStorage';
import { setCurrentLanguage } from '../../store/redux/languages';

export async function getLanguageFromDb(
  dispatch: any,
  currentLanguage: number
) {
  const language = await getDataFromAsyncStorage('language');
  if (!language) {
    await storeDataInAsyncStorage('language', currentLanguage);
  } else {
    dispatch(setCurrentLanguage(language));
  }
}
