import { createSlice } from '@reduxjs/toolkit';
import { GERMANY_GEODATA } from '../../constants/constants';

// Marker-Daten definieren
export const markers = [
  {
    id: '1',
    coordinates: [13.405, 52.52], // Berlin
  },
  {
    id: '2',
    coordinates: [10.45, 51.16], // Deutschland Mitte
  },
];

const mapSlice = createSlice({
  name: 'map',
  initialState: {
    cameraPosition: {
      zoomLevel: 3,
      centerCoordinate: GERMANY_GEODATA,
    },
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
  },
});

export const setCameraPosition = mapSlice.actions.setCameraPosition;
export const centerMap = mapSlice.actions.centerMap;
export default mapSlice.reducer;
