import ImageButton from "../../primitives/ImageButton";
import { vesselsTypesAsset } from "../../../assets/assets";
import GridContainer from "../../layout/grid-container/GridContainer";
import { Link } from "react-router-dom";

const ChoseType = () => {
  return (
    <GridContainer>
      {vesselsTypesAsset.map(({ header, text, href, imageSrc }) => (
        <Link to={href} key={header}>
          <ImageButton imageSrc={imageSrc} header={header} text={text} />
        </Link>
      ))}
    </GridContainer>
  );
};

export default ChoseType;
