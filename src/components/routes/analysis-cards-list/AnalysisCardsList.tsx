import { analysisListAsset } from "../../../data/analysis/assets";
import Button from "../../primitives/Button";
import { Link } from "react-router-dom";
import GridContainer from "../../layout/grid-container/GridContainer";

const AnalysisCardsList = () => {
  return (
    <GridContainer>
      {analysisListAsset.map(({ name }) => (
        <Link to={name} key={name}>
          <Button text={name} color="success" />
        </Link>
      ))}
    </GridContainer>
  );
};

export default AnalysisCardsList;
