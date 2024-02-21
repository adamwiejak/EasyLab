import GridContainer from "../../../layout/grid-container/GridContainer";
import { vesselsTypesAsset } from "./config";
import MediaCard from "../../../shared/media-card/MediaCard";
import BacklMediaCard from "../../../primitives/BackMediaCard";

const GravimetricVolumeCalculator = () => {
  return (
    <GridContainer>
      <BacklMediaCard />

      {vesselsTypesAsset.map(({ header, title, type, imageSrc }) => (
        <MediaCard
          key={type}
          href={type}
          title={title}
          header={header}
          imageSrc={imageSrc}
        />
      ))}
    </GridContainer>
  );
};

export default GravimetricVolumeCalculator;
