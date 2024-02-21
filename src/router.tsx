import { Navigate, createBrowserRouter } from "react-router-dom";
import Root from "./components/routes/root/Root";
import NoPage from "./components/routes/404/NoPage";
import Landing from "./components/routes/landing/Landing";
import SampleList from "./components/routes/samples-list/SampleList";
import AdminPage, {
  loader as adminLoader,
} from "./components/routes/admin/AdminPage";
import SettingsPage from "./components/routes/settings/SettingsPage";
import DevPage from "./components/routes/dev/Dev";
import AnalysisHome, {
  loader as analysisLoader,
} from "./components/routes/analysis-home/AnalysisHome";
import NotebooksList from "./components/routes/notebooks-list/NotebooksList";
import Calculate from "./components/routes/calculate/Calculate";
import AnalysisListCards from "./components/routes/analysis-cards-list/AnalysisCardsList";

const router = createBrowserRouter([
  { path: "dev", element: <DevPage /> },
  {
    path: "/",
    element: <Root />,
    errorElement: <NoPage />,
    children: [
      {
        errorElement: <NoPage />,
        children: [
          { index: true, element: <Navigate to="home" /> },
          { path: "home", element: <Landing /> },
          { path: "settings", element: <SettingsPage /> },
          { path: "samples_list", element: <SampleList /> },
          { path: "admin", element: <AdminPage />, loader: adminLoader },
          { path: "analysis", element: <AnalysisListCards /> },

          {
            path: "analysis/:analysis",
            element: <AnalysisHome />,
            children: [
              {
                path: "calculate",
                element: <Calculate />,
                loader: analysisLoader,
              },
              {
                path: "notebooks_list",
                element: <NotebooksList />,
                loader: analysisLoader,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;
