import { createSlice } from '@reduxjs/toolkit';

export const hotelsSlice = createSlice({
  name: 'hotels',
  initialState: {
    hotels: [],
    currentHotel: null,
  },
  reducers: {
    addHotels: (state, action) => {
      state.hotels = action.payload;
    },

    setCurrentHotel: (state, action) => {
      state.currentHotel = action.payload;
    },
  },
});

export default hotelsSlice.reducer;
export const { addHotels, setCurrentHotel } = hotelsSlice.actions;
