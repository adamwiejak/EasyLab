import styled from "./styled";
import { getImage } from "../../../assets/images/_images";
import { LoaderFunctionArgs, useSearchParams } from "react-router-dom";
import Background from "../../shared/background-image/Background";
import AnalysisHomeHeader from "../../shared/analyisi-home-header/AnalysisHomeHeader";
import { analysisAssets } from "../../../assets/components/analysis-components";
import { useDataFromLoader } from "../../../helpers/functions";

export const loader = (props: LoaderFunctionArgs) => {
  const analysis = props.params.analysis as AnalysisName;
  const analisisAsset = analysisAssets[analysis];
  return { ...analisisAsset };
};

const AnalysisHome = () => {
  const { tabs } = useDataFromLoader<AnalysisAsset>();
  const [searchParams] = useSearchParams();
  const activeTab = tabs.find((tab) => tab.param === searchParams.get("tab"));

  return (
    <styled.Wrapper>
      <AnalysisHomeHeader tabs={tabs} />

      {activeTab?.component}

      <Background src={getImage("background")} />
    </styled.Wrapper>
  );
};

export default AnalysisHome;
