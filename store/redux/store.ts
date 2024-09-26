import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import favoritesReducer from './favorites';
import mapReducer from './map';
import hotelsReducer from './hotels';
import offersReducer from './offers';

export const store = configureStore({
  reducer: {
    hotels: hotelsReducer,
    offers: offersReducer,
    favorites: favoritesReducer,
    map: mapReducer,
  },
});

export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
