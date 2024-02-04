import { Link } from "react-router-dom";
import GridContainer from "../../layout/grid-container/GridContainer";
import ImageButton from "../../primitives/ImageButton";
import { proceduresAsset } from "../../../assets/procedures";

const Landing = () => {
  return (
    <GridContainer>
      {proceduresAsset.map(({ header, text, href, imageSrc }) => (
        <Link to={href} key={header}>
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

export default Landing;
