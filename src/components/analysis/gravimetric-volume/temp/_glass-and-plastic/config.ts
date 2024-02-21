import { getImage } from "../../../../../assets/images/_images";
import { VesselAsset } from "../../../../../data/analysis/gravimetric-volume/types";

export const glassAndPlasticVesselsAsset: VesselAsset[] = [
  {
    vesselType: "volumetric_flask",
    header: "Kolby Miarowe",
    title: "Kolby Miarowe Szklane i Plastikowe",
    imageSrc: getImage("flasks"),
  },
  {
    vesselType: "cylinders",
    header: "Cylindry",
    title: "Cylindry Miarowe",
    imageSrc: getImage("glass_pipetes_singly"),
  },
  {
    vesselType: "glass_multi_pipete",
    header: "Pipety Wielomiarowe",
    title: "Pipety Szklane Wielomiarowe",
    imageSrc: getImage("glass_pipetes_multi"),
  },
  {
    vesselType: "glass_singly_pipete",
    header: "Pipety Jednomiarowe",
    title: "Pipety Szklane Jednomiarowe",
    imageSrc: getImage("glass_pipetes_singly"),
  },

  {
    vesselType: "biurettes",
    header: "Biurety",
    title: "Biurety i Biurety Automatyczne",
    imageSrc: getImage("burettes"),
  },
];
