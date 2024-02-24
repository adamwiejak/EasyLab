import * as config from "./config";
import { useState } from "react";
import { Dialog } from "@mui/material";
import MediaCard from "../../shared/media-card/MediaCard";
import GravimetricVolumeCalculator from "./_calculator/VesselCalculator";
import type { VesselType } from "../../../data/analysis/gravimetric-volume/types";
import GridContainer from "../../layout/grid-container/GridContainer";

const GravimetricVolume = () => {
  const [vessel, setVessel] = useState<VesselType | undefined>(undefined);

  return (
    <GridContainer>
      {config.liquidHandlingVesselsAsset.map(
        ({ header, title, vesselType, imageSrc }, idx) => (
          <span key={idx}>
            <MediaCard
              title={title}
              header={header}
              imageSrc={imageSrc}
              onClick={() => setVessel(vesselType)}
            />
          </span>
        )
      )}

      <Dialog open={!!vessel} onClose={() => setVessel(undefined)}>
        {vessel && <GravimetricVolumeCalculator vesselType={vessel} />}
      </Dialog>
    </GridContainer>
  );
};

export default GravimetricVolume;
