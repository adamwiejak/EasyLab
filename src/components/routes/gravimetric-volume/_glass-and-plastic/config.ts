import images from "../../../../assets/images/_images";
import { VesselAsset } from "../../../../data/gravimetric-volume/types";

export const glassAndPlasticVesselsAsset: VesselAsset[] = [
  {
    vesselType: "volumetric_flask",
    header: "Kolby Miarowe",
    text: "Kolby Miarowe Szklane i Plastikowe",
    imageSrc: images.flasks,
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
