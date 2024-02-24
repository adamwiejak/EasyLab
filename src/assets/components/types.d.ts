type Param = string;
type AnalysisTab = { param: string; title: string; component?: JSX.Element };

interface AnalysisAsset {
  tabs: AnalysisTab[];
  navBtn: Omit<NavButtonAsset, "href">;
}
