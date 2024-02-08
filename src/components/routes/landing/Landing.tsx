import { Link } from "react-router-dom";
import GridContainer from "../../layout/grid-container/GridContainer";
import ImageButton from "../../shared/card-button/ImageButton";
import { proceduresAsset } from "../../../assets/procedures";

const Landing = () => {
  return (
    <GridContainer>
      {/* {proceduresAsset.map(({ header, text, href, imageSrc }) => (
        <Link to={href} key={header}>
          <ImageButton text={text} header={header} imageSrc={imageSrc} />
        </Link>
      ))} */}

      {new Array(5).fill(0).map(() =>
        proceduresAsset.map(({ header, text, href, imageSrc }) => (
          <Link to={href} key={header}>
            <ImageButton text={text} header={header} imageSrc={imageSrc} />
          </Link>
        ))
      )}
    </GridContainer>
  );
};

export default Landing;
