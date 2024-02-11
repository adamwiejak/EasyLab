import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import breakpoints from "./_breakpoints";
import components from "./_components";
import customPalette from "./_palettes";
import spacing from "./_spacing";
import transitions from "./_transitions";
import mixins from "./_mixins";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    // mobile: true;
    // tablet: true;
    // laptop: true;
    // desktop: true;
  }

  interface CommonColors {
    facebook: string;
    google: string;
    unactive: string;
  }

  interface Duration {
    test: number;
    long: number;
    longest: number;
    longer: number;
  }

  // interface Theme {
  //   bordering: (idx: number) => string;
  // }

  // interface ThemeOptions {
  //   bordering?: (idx: number) => string;
  // }
}

export const theme = responsiveFontSizes(
  createTheme({
    // bordering: bordering,
    mixins: mixins,
    spacing: spacing,
    components: components,
    breakpoints: breakpoints,
    transitions: transitions,
    palette: customPalette["light"],
  })
);
