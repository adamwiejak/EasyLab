import { ThemeOptions } from "@mui/material/styles";

const components: ThemeOptions["components"] = {
  MuiButton: {
    defaultProps: {
      variant: "contained",
    },
  },

  MuiDrawer: {
    styleOverrides: {
      root: {
        backdropFilter: "blur(5px) brightness(0.7)",
      },
    },
  },
};

export default components;
