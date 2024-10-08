import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  clearDataFromAsyncStorage,
  getMultipleDataFromAsyncStorage,
  storeMultipleDataInAsyncStorage,
} from '../../services/setDataToAsyncStorage';

export const storeDataAsync = createAsyncThunk(
  'favorites/setDataInAsyncStorage',
  async (_, { getState }) => {
    const state = getState();
    const { favoritesHotelIds, favoritesOfferIds } = state.favorites;

    await clearDataFromAsyncStorage('favoritesHotelIds');
    await clearDataFromAsyncStorage('favoritesOfferIds');

    await storeMultipleDataInAsyncStorage(
      'favoritesHotelIds',
      'favoritesOfferIds',
      favoritesHotelIds,
      favoritesOfferIds
    );
  }
);

export const getFavotitesFromDbThunk = createAsyncThunk(
  'favorites/getDataFromAsyncStorage',
  async () => {
    const keys = ['favoritesHotelIds', 'favoritesOfferIds'];
    const data = await getMultipleDataFromAsyncStorage(keys);

    if (!data) {
      return [[], []];
    }

    const favorites = data.map(([, value]) => value ?? []);
    return favorites;
  }
);

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favoritesHotelIds: [],
    favoritesOfferIds: [],
    favoritesLoading: false,
    hotelsBtnActivated: true,
    offersBtnActivated: true,
  },
  reducers: {
    toggleFavoriteHotel: (state, action: PayloadAction<number>) => {
      const hotelIndex = state.favoritesHotelIds.findIndex(
        (favoriteId: number) => favoriteId === (action.payload as number)
      );

      if (hotelIndex !== -1) {
        state.favoritesHotelIds.splice(hotelIndex, 1);
      } else {
        state.favoritesHotelIds.push(action.payload);
      }
    },

    toggleFavoriteOffer: (state, action: PayloadAction<number>) => {
      const offerIndex = state.favoritesOfferIds.findIndex(
        (favoriteId) => favoriteId === (action.payload as number)
      );

      if (offerIndex !== -1) {
        state.favoritesOfferIds.splice(offerIndex, 1);
      } else {
        state.favoritesOfferIds.push(action.payload);
      }
    },
    toggleHotelsFilter: (state) => {
      state.hotelsBtnActivated = true;
      state.offersBtnActivated = !state.offersBtnActivated;
    },

    toggleOffersFilter: (state) => {
      state.offersBtnActivated = true;
      state.hotelsBtnActivated = !state.hotelsBtnActivated;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(storeDataAsync.pending, (state, action) => {
      state.favoritesLoading = true;
    });
    builder.addCase(storeDataAsync.fulfilled, (state, action) => {
      state.favoritesLoading = false;
    });
    builder.addCase(storeDataAsync.rejected, (state, action) => {
      state.favoritesLoading = false;
      console.error('getData rejected:', action.error);
    });

    builder.addCase(getFavotitesFromDbThunk.pending, (state, action) => {
      state.favoritesLoading = true;
    });
    builder.addCase(getFavotitesFromDbThunk.fulfilled, (state, action) => {
      console.log('action.payload', action.payload);
      if (action.payload) {
        state.favoritesLoading = false;
        state.favoritesHotelIds = action.payload[0];
        state.favoritesOfferIds = action.payload[1];
      } else {
        console.error('No payload received in getDataAsync.fulfilled');
      }
    });
    builder.addCase(getFavotitesFromDbThunk.rejected, (state, action) => {
      state.favoritesLoading = false;
      console.error('getData rejected:', action.error);
    });
  },
});

export const toggleFavoriteHotel = favoritesSlice.actions.toggleFavoriteHotel;

export const toggleFavoriteOffer = favoritesSlice.actions.toggleFavoriteOffer;

export const toggleHotelsFilter = favoritesSlice.actions.toggleHotelsFilter;

export const toggleOffersFilter = favoritesSlice.actions.toggleOffersFilter;

export default favoritesSlice.reducer;
