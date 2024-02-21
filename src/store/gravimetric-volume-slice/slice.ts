import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as matherials from "../../data/analysis/gravimetric-volume/matherials";

const initialState = {
  massStandardDensity: {
    value: matherials.massStandardsDensity.stal,
    unit: "g/cm³",
  },
  thermalExpansionCoefficient: {
    value: matherials.thermalExpansionCoefficients.DURAN,
    unit: "1/°C",
  },
};

const gravimetricVolumeSlice = createSlice({
  name: "gravimetricVolume",
  initialState,
  reducers: {
    setThermalExpansionCoefficient(state, actions: PayloadAction<number>) {
      const value = actions.payload;
      state.thermalExpansionCoefficient = {
        ...state.thermalExpansionCoefficient,
        value,
      };
    },
  },
});

export default gravimetricVolumeSlice.reducer;
export const gravimetricVolume = gravimetricVolumeSlice.actions;
