import images from "../../../../assets/images/_images";
import { VesselAsset } from "../../../../data/gravimetric-volume/types";

export const liquidHandlingVesselsAsset: VesselAsset[] = [
  {
    vesselType: "manual_pipete",
    header: "Pipety Manualne",
    text: "Tłokowe Pipety Manualne",
    imageSrc: images.manualPipettes,
  },
  {
    vesselType: "electric_pipete",
    header: "Pipety Elektroniczne",
    text: "Tłokowe Pipety Elektroniczne",
    imageSrc: images.electricalPipettes,
  },
  {
    vesselType: "portionmeters",
    header: "Porcjometry",
    text: "Porcjometry",
    imageSrc: images.portionmeters,
  },
];
