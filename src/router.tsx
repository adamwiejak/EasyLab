import { createBrowserRouter } from "react-router-dom";
import Root from "./components/routes/root/Root";
import NoPage from "./components/routes/404/NoPage";
import GravimetricVolume from "./components/routes/gravimetric-volume/GravimetricVolume";
import Landing from "./components/routes/landing/Landing";
import Calculate from "./components/routes/gravimetric-volume/_calculate/CalculateGravimetricVolume";
import DryMatter from "./components/routes/dry-matter/DryMatter";
import LiquidHandling from "./components/routes/gravimetric-volume/_liquid-handling/LiquidHandling";
import GlassAndPlastic from "./components/routes/gravimetric-volume/_glass-and-plastic/GlassAndPlastic";
import SampleList from "./components/routes/samples-list/SampleList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Landing /> },
      {
        path: "gravimetric_volume",
        element: <GravimetricVolume />,
        children: [
          { path: "liquid_handling", element: <LiquidHandling /> },
          { path: "glass_and_plastic", element: <GlassAndPlastic /> },
          { path: ":vessel_type/calculate/", element: <Calculate /> },
        ],
      },
      {
        path: "dry_matter",
        element: <DryMatter />,
        children: [{ path: "calculate", element: <Calculate /> }],
      },
      {
        path: "samples_list",
        element: <SampleList />,
      },
    ],

    errorElement: <NoPage />,
  },
]);

export default router;
