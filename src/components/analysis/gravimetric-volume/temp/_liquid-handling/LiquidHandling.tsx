import GridContainer from "../../../../layout/grid-container/GridContainer";
import { liquidHandlingVesselsAsset } from "./config";
import MediaCard from "../../../../shared/media-card/MediaCard";
import BackMediaCard from "../../../../primitives/BackMediaCard";

const LiquidHandling = () => {
  return (
    <GridContainer>
      <BackMediaCard title="Liqud Handling / Glas And Plastic" />

      {liquidHandlingVesselsAsset.map(
        ({ header, title, vesselType, imageSrc }) => (
          <MediaCard
            key={title}
            title={title}
            header={header}
            imageSrc={imageSrc}
            // href={`?vessel=${vesselType}`}
          />
        )
      )}
    </GridContainer>
  );
};

export default LiquidHandling;
