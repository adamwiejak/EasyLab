import { getImage } from "../../../assets/images/_images";
import { VesselAsset } from "../../../data/analysis/gravimetric-volume/types";

// export const vesselsTypesAsset = [
//   {
//     type: "glass_and_plastic",
//     header: "Glas and Plastic",
//     imageSrc: getImage("glass_and_plastic"),
//     title: "Kolby, Cylindry, Pipety Szklane, Biurety",
//   },
//   {
//     type: "liquid_handling",
//     header: "Liquid Handling",
//     imageSrc: getImage("liquid_handling"),
//     title: "Pipety Tłokowe i Porcjometry",
//   },
// ];

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
    imageSrc: getImage("cylinders"),
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
