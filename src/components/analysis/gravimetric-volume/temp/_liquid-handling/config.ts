import { getImage } from "../../../../../assets/images/_images";
import { VesselAsset } from "../../../../../data/analysis/gravimetric-volume/types";

export const liquidHandlingVesselsAsset: VesselAsset[] = [
  {
    vesselType: "manual_pipete",
    header: "Pipety Manualne",
    title: "Tłokowe Pipety Manualne",
    imageSrc: getImage("manual_pipettes"),
  },
  {
    vesselType: "electric_pipete",
    header: "Pipety Elektroniczne",
    title: "Tłokowe Pipety Elektroniczne",
    imageSrc: getImage("electrical_pipettes"),
  },
  {
    vesselType: "portionmeters",
    header: "Porcjometry",
    title: "Porcjometry",
    imageSrc: getImage("portionmeters"),
  },
];
