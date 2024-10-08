import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const languagesSlice = createSlice({
  name: 'languages',
  initialState: {
    currentLanguage: 1,
    isOpenMenu: false,
  },
  reducers: {
    setCurrentLanguage: (state, action) => {
      state.currentLanguage = action.payload;
    },

    toggleMenu: (state) => {
      state.isOpenMenu = !state.isOpenMenu;
    },
  },
});

export default languagesSlice.reducer;
export const { setCurrentLanguage, toggleMenu } = languagesSlice.actions;
