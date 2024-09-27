import { createSlice } from '@reduxjs/toolkit';

export const offersSlice = createSlice({
  name: 'offers',
  initialState: {
    offers: [],
    currentOffer: null,
  },
  reducers: {
    addOffers: (state, action) => {
      state.offers = action.payload;
    },
    setCurrentOffer: (state, action) => {
      state.currentOffer = action.payload;
    },
  },
});

export default offersSlice.reducer;
export const { addOffers, setCurrentOffer } = offersSlice.actions;
