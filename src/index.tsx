import gsap from "gsap";
import "./main.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import router from "./router";
import { Provider } from "react-redux";
import store from "./store/Store";
import { ThemeProvider } from "@mui/material";
import { theme } from "./styles/MUI/theme";

gsap.registerEffect({
  name: "faintIn",
  effect: (target: any) =>
    gsap.fromTo(target, { autoAlpha: 0, y: "5vh" }, { autoAlpha: 1, y: 0 }),
});

gsap.registerEffect({
  name: "spreadChildren",
  effect: (targets: gsap.TweenTarget, vars: gsap.TweenVars) => {
    gsap.set(targets, { opacity: 0, scale: 0.95, yPercent: 5 });
    return gsap.to(targets, { opacity: 1, scale: 1, yPercent: 0, ...vars });
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
