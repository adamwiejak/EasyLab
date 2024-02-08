import "./main.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import router from "./router";
import { Provider } from "react-redux";
import store from "./store/Store";
import { ThemeProvider } from "@mui/material";
import { theme } from "./styles/MUI/theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
