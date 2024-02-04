import { createBrowserRouter } from "react-router-dom";
import Root from "./components/routes/root/Root";
import NoPage from "./components/routes/no-page/NoPage";
import GravimetricVolume from "./components/routes/gravimetric-volume/GravimetricVolume";
import Landing from "./components/routes/landing/Landing";
import Other from "./components/routes/other-view/Other";
import VesselType, { loader } from "./components/routes/vessel-type/VesselType";
import Calculate from "./components/_gravimetric-volume/calculate/Calculate";

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
          {
            path: ":vessel_type",
            loader: loader,
            element: <VesselType />,
            children: [{ path: "calculate/volume?", element: <Calculate /> }],
          },
        ],
      },
      {
        path: "some_other_procedure",
        element: <Other />,
      },
    ],
    errorElement: <NoPage />,
  },
]);

export default router;
