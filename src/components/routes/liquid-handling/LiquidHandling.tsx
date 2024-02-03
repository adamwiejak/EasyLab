import GridContainer from "../../layout/grid-container/GridContainer";
import { Link } from "react-router-dom";
import ImageButton from "../../primitives/ImageButton";
import { automaticPipetes } from "../../../assets/assets";

const LiquidHandling = () => {
  return (
    <GridContainer>
      {automaticPipetes.map(({ header, text, href, imageSrc }) => (
        <Link to={`/calculate/${href}`} key={header}>
          <ImageButton
            height={250}
            imageSrc={imageSrc}
            header={header}
            text={text}
          />
        </Link>
      ))}
    </GridContainer>
  );
};

export default LiquidHandling;
