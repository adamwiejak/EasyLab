import ExelUtils from "../../components/_dev/ExelUtils";
import DryMatterCalculator from "../../components/analysis/dry-matter/_calculator/DryMatterCalculator";
import GravimetricVolume from "../../components/analysis/gravimetric-volume/GravimetricVolume";
import NotebooksList from "../../components/shared/notebooks-list/NotebooksList";

const GRAVIMETRIC_VOLUME: AnalysisAsset = {
  navBtn: {
    icon: "science",
    title: "Sprawdzanie Naczyń Miarowych",
  },
  tabs: [
    {
      param: "calculate",
      title: "Kalkulatory",
      component: <GravimetricVolume />,
    },
    {
      param: "notebooks_list",
      title: "Zeszyty Robocze",
      component: <NotebooksList />,
    },

    { param: "exel_utils", title: "Narzędzia Exel", component: <ExelUtils /> },
  ],
};

const DRY_MATTER: AnalysisAsset = {
  navBtn: {
    icon: "science",
    title: "Sucha Masa",
  },
  tabs: [
    {
      param: "calculate",
      title: "Kalkulatory",
      component: <DryMatterCalculator />,
    },
    {
      param: "notebooks_list",
      title: "Zeszyty Robocze",
      component: <NotebooksList />,
    },
  ],
};

/////////////////////////////

export const analysisAssets: Record<AnalysisName, AnalysisAsset> = {
  gravimetric_volume: GRAVIMETRIC_VOLUME,
  dry_matter: DRY_MATTER,
};
