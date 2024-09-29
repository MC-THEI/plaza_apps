import { createSlice } from '@reduxjs/toolkit';

export const offersSlice = createSlice({
  name: 'offers',
  initialState: {
    offers: [],
    currentOfferId: null,
  },
  reducers: {
    addOffers: (state, action) => {
      state.offers = action.payload;
    },
    setCurrentOffer: (state, action) => {
      state.currentOfferId = action.payload;
    },
  },
});

export default offersSlice.reducer;
export const { addOffers, setCurrentOffer } = offersSlice.actions;
