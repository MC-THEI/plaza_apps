import { createSlice } from '@reduxjs/toolkit';

export const offersSlice = createSlice({
  name: 'offers',
  initialState: {
    offers: [],
  },
  reducers: {
    addOffers: (state, action) => {
      state.offers = action.payload;
    },
  },
});

export default offersSlice.reducer;
export const { addOffers } = offersSlice.actions;
