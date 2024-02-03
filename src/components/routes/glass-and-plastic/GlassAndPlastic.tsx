import GridContainer from "../../layout/grid-container/GridContainer";
import { Link } from "react-router-dom";
import ImageButton from "../../primitives/ImageButton";
import { glassVesselsAsset } from "../../../assets/assets";

const GlassAndPlastic = () => {
  return (
    <GridContainer>
      {glassVesselsAsset.map(({ header, text, href, imageSrc }) => (
        <Link to={`/calculate/${href}`} key={header}>
          <ImageButton
            text={text}
            height={250}
            header={header}
            imageSrc={imageSrc}
          />
        </Link>
      ))}
    </GridContainer>
  );
};

export default GlassAndPlastic;
