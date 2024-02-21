import GridContainer from "../../../../layout/grid-container/GridContainer";
import { glassAndPlasticVesselsAsset } from "./config";
import MediaCard from "../../../../shared/media-card/MediaCard";
import BackMediaCard from "../../../../primitives/BackMediaCard";

const GlassAndPlastic = () => {
  return (
    <GridContainer>
      <BackMediaCard />

      {glassAndPlasticVesselsAsset.map(
        ({ title, vesselType, header, imageSrc }) => (
          <MediaCard
            key={vesselType}
            title={title}
            header={header}
            imageSrc={imageSrc}
            href={`?vessel=${vesselType}`}
          />
        )
      )}
    </GridContainer>
  );
};

export default GlassAndPlastic;
