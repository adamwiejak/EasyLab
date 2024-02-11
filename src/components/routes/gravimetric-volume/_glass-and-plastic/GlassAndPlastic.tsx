import GridContainer from "../../../layout/grid-container/GridContainer";
import { Link } from "react-router-dom";
import { glassAndPlasticVesselsAsset } from "./config";
import MediaCard from "../../../shared/media-card/MediaCard";
import BackMediaCard from "../../../primitives/BackMediaCard";

const GlassAndPlastic = () => {
  return (
    <GridContainer>
      <BackMediaCard text="Wróć Do Wyboru Typu Naczynia" height={250} />

      {glassAndPlasticVesselsAsset.map((asset) => (
        <Link to={`calculate/?vessel=${asset.vesselType}`} key={asset.header}>
          <MediaCard
            height={250}
            text={asset.text}
            header={asset.header}
            imageSrc={asset.imageSrc}
          />
        </Link>
      ))}
    </GridContainer>
  );
};

export default GlassAndPlastic;
