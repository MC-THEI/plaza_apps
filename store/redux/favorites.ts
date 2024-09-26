import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favoritesHotels: [],
    favoritesOffers: [],
  },
  reducers: {
    addFavoriteHotel: (state, action) => {
      state.favoritesHotels.push(action.payload);
    },
    removeFavoriteHotel: (state, action) => {
      state.favoritesHotels = state.favoritesHotels.filter(
        (favorite) => favorite.id !== action.payload
      );
    },
    addFavoriteOffer: (state, action) => {
      state.favoritesOffers.push(action.payload);
    },
    removeFavoriteOffer: (state, action) => {
      state.favoritesOffers = state.favoritesOffers.filter(
        (favorite) => favorite.id !== action.payload
      );
    },
  },
});

export const addFavoriteHotel = favoritesSlice.actions.addFavoriteHotel;
export const addFavoriteOffer = favoritesSlice.actions.addFavoriteOffer;

export const removeFavoriteHotel = favoritesSlice.actions.removeFavoriteHotel;
export const removeFavoriteOffer = favoritesSlice.actions.removeFavoriteOffer;

export default favoritesSlice.reducer;
