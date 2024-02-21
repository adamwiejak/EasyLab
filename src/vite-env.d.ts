/// <reference types="vite/client" />

type AnalysisName = "gravimetric_volume" | "dry_matter";

type AnalisisComponentsAsset = {
  calculator: JSX.Element;
  notebooks: JSX.Element;
};

interface AnalisisAsset {
  title: string;
  icon: IconName;
  name: AnalysisName;
}

interface INavButtonAsseet extends Omit<INavButton, "icon"> {
  icon: IconName;
}
