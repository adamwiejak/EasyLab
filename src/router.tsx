import { createBrowserRouter } from "react-router-dom";
import Root from "./components/routes/root/Root";
import NoPage from "./components/routes/no-page/NoPage";
import ChoseType from "./components/routes/chose-type/ChoseType";
import GlassAndPlastic from "./components/routes/glass-and-plastic/GlassAndPlastic";
import LiquidHandling from "./components/routes/liquid-handling/LiquidHandling";
import Calculator, { Some } from "./components/routes/calculator/Calculator";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <ChoseType /> },
      { path: "glass&plastic", element: <GlassAndPlastic /> },
      { path: "liquid_handling", element: <LiquidHandling /> },
      {
        path: "calculate/:vessel?",
        element: <Calculator />,
        children: [{ path: ":vessel/:volume", element: <Some /> }],
      },
    ],
    errorElement: <NoPage />,
  },
]);

export default router;
