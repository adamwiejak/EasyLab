import {
  burettes,
  cylinders,
  electrical_pipettes,
  flask,
  glass,
  glassPipetes,
  manual_pipettes,
  pipettes,
  portionmeters,
} from "./images/_images";

export const vesselsTypesAsset = [
  {
    imageSrc: glass,
    href: "glass&plastic",
    header: "Glas and Plastic",
    text: "Kolby, Cylindry, Pipety Szklane, Biurety",
  },
  {
    href: "liquid_handling",
    header: "Liquid Handling",
    text: "Pipety Tłokowe Elektroniczne i Manualne",
    imageSrc: pipettes,
  },
];

export const glassVesselsAsset = [
  {
    href: "volumetric_flasks",
    header: "Volumetric Flasks",
    text: "Kolby Miarowe",
    imageSrc: flask,
  },
  {
    href: "cylinders",
    header: "Cylinders",
    text: "Cylindry Miarowe",
    imageSrc: cylinders,
  },
  {
    href: "glass_pipetes",
    header: "Glass Pipettes",
    text: "Pipety Szklane",
    imageSrc: glassPipetes,
  },
  {
    href: "burettes",
    header: "Burettes",
    text: "Biurety",
    imageSrc: burettes,
  },
  {
    href: "portionmeters",
    header: "Porcjometry",
    text: "Porcjometry",
    imageSrc: portionmeters,
  },
];
export const automaticPipetes = [
  {
    href: "electrical_pipete",
    header: "Elektroniczne Pipety",
    text: "Tłokowe Pipety Elektroniczne",
    imageSrc: manual_pipettes,
  },
  {
    href: "manual_pipete",
    header: "Pipety Manualne",
    text: "Tłokowe Pipety Manualne",
    imageSrc: electrical_pipettes,
  },
];
