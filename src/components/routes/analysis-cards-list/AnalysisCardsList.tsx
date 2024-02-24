import { analysisAssets } from "../../../assets/components/analysis-components";
import Button from "../../primitives/Button";
import { Link } from "react-router-dom";
import GridContainer from "../../layout/grid-container/GridContainer";

const AnalysisCardsList = () => {
  return (
    <GridContainer>
      {Object.keys(analysisAssets).map((key) => (
        <Link to={key} key={key}>
          <Button text={key} color="success" />
        </Link>
      ))}
    </GridContainer>
  );
};

export default AnalysisCardsList;
