import { createSlice } from '@reduxjs/toolkit';

export const hotelsSlice = createSlice({
  name: 'hotels',
  initialState: {
    hotels: [],
  },
  reducers: {
    addHotels: (state, action) => {
      state.hotels = action.payload;
    },
  },
});

export default hotelsSlice.reducer;
export const { addHotels } = hotelsSlice.actions;
