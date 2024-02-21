import styled from "./styled";
import { useDataFromLoader } from "../../../helpers/functions";
import { Typography } from "@mui/material";
import { analisisComponentsAssets } from "../../../data/analysis/assets";
import { getImage } from "../../../assets/images/_images";
import Background from "../../shared/background-image/Background";

const NoFound = (analysis: string) => (
  <Typography variant="h3">No Calculator Found For {analysis}</Typography>
);

const Calculate = () => {
  const { analysis } = useDataFromLoader<{ analysis: AnalysisName }>();

  return (
    <styled.Container>
      {analisisComponentsAssets.get(analysis)?.calculator || NoFound(analysis)}

      <Background src={getImage("calculate")} />
    </styled.Container>
  );
};

export default Calculate;
