import GridContainer from "../../layout/grid-container/GridContainer";
import { Link } from "react-router-dom";
import ImageButton from "../../shared/card-button/ImageButton";
import { liquidHandlingVesselsAsset } from "../../../assets/gravimetic-volume";

const backBtn = { text: "Cofnij do Wyboru Typu Nacznia" };

const LiquidHandling = () => {
  return (
    <GridContainer backBtn={backBtn}>
      {liquidHandlingVesselsAsset.map(
        ({ header, text, vesselType, imageSrc }) => (
          <Link to={`calculate/?vessel=${vesselType}`} key={header}>
            <ImageButton
              height={250}
              imageSrc={imageSrc}
              header={header}
              text={text}
            />
          </Link>
        )
      )}
    </GridContainer>
  );
};

export default LiquidHandling;
