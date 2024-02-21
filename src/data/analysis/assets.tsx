import DryMatterCalculator from "../../components/analysis/dry-matter/_calculator/DryMatterCalculator";
import GravimetricVolumeCalculator from "../../components/analysis/gravimetric-volume/_calculator/GravimetricVolumeCalculator";

export const analysisListAsset: AnalisisAsset[] = [
  {
    icon: "science",
    name: "gravimetric_volume",
    title: "Sprawdzanie Naczyń Miarowych",
  },
  {
    icon: "science",
    name: "dry_matter",
    title: "Sucha Masa",
  },
];

export const analisisComponentsAssets = new Map<
  AnalysisName,
  AnalisisComponentsAsset
>([
  [
    "gravimetric_volume",
    {
      notebooks: <h1>Notebooks</h1>,
      calculator: <GravimetricVolumeCalculator />,
    },
  ],
  [
    "dry_matter",
    {
      calculator: <DryMatterCalculator />,
      notebooks: <h1>Notebooks</h1>,
    },
  ],
]);
