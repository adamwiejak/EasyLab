import GridContainer from "../../layout/grid-container/GridContainer";
import { Link } from "react-router-dom";
import ImageButton from "../../shared/card-button/ImageButton";
import { glassAndPlasticVesselsAsset } from "../../../assets/gravimetic-volume";

const backBtn = { text: "Cofnij do Wyboru Typu Nacznia" };

const GlassAndPlastic = () => {
  return (
    <GridContainer backBtn={backBtn}>
      {glassAndPlasticVesselsAsset.map(
        ({ header, text, vesselType, imageSrc }) => (
          <Link to={`calculate/?vessel=${vesselType}`} key={header}>
            <ImageButton
              text={text}
              height={250}
              header={header}
              imageSrc={imageSrc}
            />
          </Link>
        )
      )}
    </GridContainer>
  );
};

export default GlassAndPlastic;
