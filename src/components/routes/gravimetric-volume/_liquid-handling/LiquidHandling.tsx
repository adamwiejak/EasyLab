import GridContainer from "../../../layout/grid-container/GridContainer";
import { Link } from "react-router-dom";
import { liquidHandlingVesselsAsset } from "./config";
import MediaCard from "../../../shared/media-card/MediaCard";
import BackMediaCard from "../../../primitives/BackMediaCard";

const LiquidHandling = () => {
  return (
    <GridContainer>
      <BackMediaCard text="Wróć Do Wyboru Typu Naczynia" height={250} />

      {liquidHandlingVesselsAsset.map(
        ({ header, text, vesselType, imageSrc }) => (
          <Link to={`calculate/?vessel=${vesselType}`} key={header}>
            <MediaCard
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
