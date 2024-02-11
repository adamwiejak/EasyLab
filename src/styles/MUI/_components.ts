import { ThemeOptions } from "@mui/material/styles";

const components: ThemeOptions["components"] = {
  MuiButton: {
    defaultProps: {
      variant: "contained",
    },
  },

  MuiSelect: {
    defaultProps: { variant: "standard" },
  },

  MuiFormGroup: {
    styleOverrides: {
      root: {
        justifyContent: "space-around",
      },
    },
  },

  MuiFormLabel: {
    styleOverrides: {
      root: {
        textAlign: "start",
      },
    },
  },

  MuiTextField: {
    defaultProps: {
      // variant: "filled",
    },
  },
};

export default components;
