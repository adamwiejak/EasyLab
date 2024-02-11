import type { PaletteOptions } from "@mui/material/styles";

export const common = {
  facebook: "#1197F5",
  google: "#DB4437",
  unactive: "#808080",
};

export const paletteLight: PaletteOptions = {
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

export const paletteDark: PaletteOptions = {
  common,
  mode: "dark",
  // primary: {
  //   main: "#ac9271",
  // },
  // secondary: {
  //   main: "#c88933",
  // },
};

export default {
  light: paletteLight,
  dark: paletteDark,
};
