import type { PaletteOptions } from "@mui/material/styles";

const common = {
  facebook: "#1197F5",
  google: "#DB4437",
  unactive: "#808080",
};

const _paletteLight: PaletteOptions = {
  common,
  mode: "light",
  // primary: {
  //   light: "#8559a1",
  //   main: "#67308a",
  //   dark: "#482160",
  //   contrastText: "#ffffff",
  // },
  // secondary: {
  //   light: "#8559a1",
  //   main: "#67308a",
  //   dark: "#482160",
  //   contrastText: "#ffffff",
  // },
  // background: { default: "#ffffff", paper: "#efefef" },
};

const _paletteDark: PaletteOptions = {
  common,
  mode: "dark",
  // primary: {
  //   main: "#ac9271",
  // },
  // secondary: {
  //   main: "#c88933",
  // },
};

export const customPalette = {
  light: _paletteLight,
  dark: _paletteDark,
};
