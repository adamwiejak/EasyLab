import { Navigate, createBrowserRouter } from "react-router-dom";
import Root from "./components/routes/root/Root";
import NoPage from "./components/routes/404/NoPage";
import Landing from "./components/routes/landing/Landing";
import ExaminationCards from "./components/routes/samples-cards/ExaminationCards";
import AdminPage from "./components/routes/admin/AdminPage";
import SettingsPage from "./components/routes/settings/SettingsPage";
import DevPage from "./components/routes/_dev/Dev";
import AnalysisHome, {
  loader as analysisLoader,
} from "./components/routes/analysis-home/AnalysisHome";
import AnalysisListCards from "./components/routes/analysis-cards-list/AnalysisCardsList";

const router = createBrowserRouter([
  { path: "dev", element: <DevPage /> },
  {
    path: "/",
    element: <Root />,
    errorElement: <NoPage />,
    children: [
      { index: true, element: <Navigate to="home" /> },
      { path: "home", element: <Landing /> },
      { path: "admin", element: <AdminPage /> },
      { path: "settings", element: <SettingsPage /> },
      { path: "analysis_list", element: <AnalysisListCards /> },
      { path: "examination_cards", element: <ExaminationCards /> },
      {
        element: <AnalysisHome />,
        loader: analysisLoader,
        path: "analysis_list/:analysis",
      },
    ],
  },
]);

export default router;
