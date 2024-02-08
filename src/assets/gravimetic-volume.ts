import { VesselAsset } from "../types";
import * as images from "./images/_images";

export const vesselsTypeAsset = [
  {
    href: "glass_and_plastic",
    imageSrc: images.glass,
    header: "Glas and Plastic",
    text: "Kolby, Cylindry, Pipety Szklane, Biurety",
  },
  {
    href: "liquid_handling",
    header: "Liquid Handling",
    text: "Pipety Tłokowe i Porcjometry",
    imageSrc: images.pipettes,
  },
];

export const glassAndPlasticVesselsAsset: VesselAsset[] = [
  {
    vesselType: "volumetric_flask",
    header: "Kolby Miarowe",
    text: "Kolby Miarowe Szklane i Plastikowe",
    imageSrc: images.flask,
  },
  {
    vesselType: "cylinders",
    header: "Cylindry",
    text: "Cylindry Miarowe",
    imageSrc: images.cylinders,
  },
  {
    vesselType: "glass_multi_pipete",
    header: "Pipety Wielomiarowe",
    text: "Pipety Szklane Wielomiarowe",
    imageSrc: images.glassPipetesMulti,
  },
  {
    vesselType: "glass_singly_pipete",
    header: "Pipety Jednomiarowe",
    text: "Pipety Szklane Jednomiarowe",
    imageSrc: images.glassPipetesSingly,
  },

  {
    vesselType: "biurettes",
    header: "Biurety",
    text: "Biurety i Biurety Automatyczne",
    imageSrc: images.burettes,
  },
];

export const liquidHandlingVesselsAsset: VesselAsset[] = [
  {
    vesselType: "electric_pipete",
    header: "Elektroniczne Pipety",
    text: "Tłokowe Pipety Elektroniczne",
    imageSrc: images.manual_pipettes,
  },
  {
    vesselType: "manual_pipete",
    header: "Pipety Manualne",
    text: "Tłokowe Pipety Manualne",
    imageSrc: images.electrical_pipettes,
  },
  {
    vesselType: "portionmeter",
    header: "Porcjometry",
    text: "Porcjometry",
    imageSrc: images.portionmeters,
  },
];
