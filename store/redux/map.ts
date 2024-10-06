import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GERMANY_GEODATA } from '../../constants/constants';
import { NavigationTypes } from '../../types/NavigationTypes';
import { IHotel } from '../../types/HotelTypes';
import { IOffer } from '../../types/OfferTypes';

interface IRootState extends ReturnType<typeof rootReducer> {
  map: {
    selectedMapList: NavigationTypes;
    searchInputValue: string;
    visibleObjects: (IHotel | IOffer)[];
    filteredObjects: (IHotel | IOffer)[];
    isMapChanging: boolean;
    userLocation: number[] | null;
    isLoadingUserLocation: boolean;
  };
  hotels: {
    hotels: IHotel[];
  };
  offers: {
    offers: IOffer[];
  };
}

export const getObjectsThunk = createAsyncThunk(
  'map/getHotels',
  async (_, { getState }) => {
    const state = getState() as IRootState;
    const selectedMapList = state.map.selectedMapList as NavigationTypes;
    const hotels = state.hotels.hotels as IHotel[];
    const offers = state.offers.offers as IOffer[];

    if (selectedMapList === NavigationTypes.Hotel) {
      return hotels;
    } else if (selectedMapList === NavigationTypes.Offer) {
      return offers;
    }
  }
);

const mapSlice = createSlice({
  name: 'map',
  initialState: {
    cameraPosition: {
      zoomLevel: 3,
      centerCoordinate: GERMANY_GEODATA,
    },
    selectedMapList: NavigationTypes.Hotel,
    searchInputValue: '',
    visibleObjects: [],
    filteredObjects: [],
    isMapChanging: false,
    userLocation: null as number[] | null,
  },
  reducers: {
    centerMap: (state) => {
      const coordinatesEqual = (coord1: number[], coord2: number[]) => {
        return (
          Array.isArray(coord1) &&
          Array.isArray(coord2) &&
          coord1.length === coord2.length &&
          coord1.every((value, index) => value === coord2[index])
        );
      };

      if (
        coordinatesEqual(state.cameraPosition.centerCoordinate, GERMANY_GEODATA)
      ) {
        state.cameraPosition.centerCoordinate = [10, 51.01];
      } else {
        state.cameraPosition.centerCoordinate = GERMANY_GEODATA;
      }

      state.cameraPosition.zoomLevel = 3;
    },

    setCameraPosition: (state, action) => {
      state.cameraPosition = action.payload;
    },

    setSelectedMapList: (state, action) => {
      state.selectedMapList = action.payload;
    },

    setVisibleObjects: (state, action) => {
      state.visibleObjects = action.payload;
    },

    setSearchInputValue: (state, action) => {
      state.searchInputValue = action.payload;
    },
    setMapChanging: (state, action) => {
      state.isMapChanging = action.payload;
    },

    resetMapStates: (state) => {
      state.searchInputValue = '';
      state.visibleObjects = [];
      state.filteredObjects = [];
      state.cameraPosition = {
        zoomLevel: 3,
        centerCoordinate: GERMANY_GEODATA,
      };
    },
    setUserLocation(state, action) {
      state.userLocation = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getObjectsThunk.fulfilled, (state, action) => {
      const objects = action.payload;
      const inputValue = state.searchInputValue;
      const filteredObjects = objects?.filter((obj: IHotel | IOffer) =>
        obj.searchTags.toLowerCase().includes(inputValue.toLowerCase().trim())
      );

      let sortedObjects;

      state.filteredObjects = filteredObjects;
      state.visibleObjects = filteredObjects;
    });
  },
});

export const setCameraPosition = mapSlice.actions.setCameraPosition;
export const centerMap = mapSlice.actions.centerMap;

export const {
  setSelectedMapList,
  setVisibleObjects,
  setSearchInputValue,
  resetMapStates,
  setMapChanging,
  setUserLocation,
} = mapSlice.actions;
export default mapSlice.reducer;
