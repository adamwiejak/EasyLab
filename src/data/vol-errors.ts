import { VesselErrors } from "../types";

const flaskErrors: Record<number, VesselErrors> = {
  5000: { unit: "ml", vol: 1.2 },
  2000: { unit: "ml", vol: 0.6 },
  1000: { unit: "ml", vol: 0.4 },
  500: { unit: "ml", vol: 0.25 },
  250: { unit: "ml", vol: 0.15 },
  200: { unit: "ml", vol: 0.15 },
  100: { unit: "ml", vol: 0.1 },
  50: { unit: "ml", vol: 0.06 },
  25: { unit: "ml", vol: 0.04 },
  20: { unit: "ml", vol: 0.025 },
  10: { unit: "ml", vol: 0.025 },
  5: { unit: "ml", vol: 0.025 },
  2: { unit: "ml", vol: 0.025 },
  1: { unit: "ml", vol: 0.025 },
};

const cylinderErrors: Record<number, VesselErrors> = {
  2000: { unit: "ml", vol: 10 },
  1000: { unit: "ml", vol: 5 },
  500: { unit: "ml", vol: 2.5 },
  250: { unit: "ml", vol: 1 },
  100: { unit: "ml", vol: 0.5 },
  50: { unit: "ml", vol: 0.5 },
  25: { unit: "ml", vol: 0.25 },
  10: { unit: "ml", vol: 0.1 },
  5: { unit: "ml", vol: 0.05 },
};

const glassMultiPipetesErrors: Record<number, VesselErrors> = {
  100: { unit: "ml", vol: 0.08 },
  50: { unit: "ml", vol: 0.05 },
  25: { unit: "ml", vol: 0.03 },
  20: { unit: "ml", vol: 0.03 },
  10: { unit: "ml", vol: 0.02 },
  5: { unit: "ml", vol: 0.015 },
  2: { unit: "ml", vol: 0.01 },
  1: { unit: "ml", vol: 0.008 },
  0.5: { unit: "ml", vol: 0.005 },
};

const glassSinglyPipete: Record<number, VesselErrors> = {
  25: { unit: "ml", vol: { "0.20": 0.1, "0.10": 0.1 } },
  20: { unit: "ml", vol: { "0.10": 0.1 } },
  10: { unit: "ml", vol: { "0.10": 0.05 } },
  5: { unit: "ml", vol: { "0.10": 0.03, "0.05": 0.01 } },
  2: { unit: "ml", vol: { "0.10": 0.03, "0.02": 0.03 } },
  1: { unit: "ml", vol: { "0.10": 0.007, "0.01": 0.007 } },
  0.5: { unit: "ml", vol: { "0.01": 0.006 } },
  0.2: { unit: "ml", vol: { "0.01": 0.006 } },
  0.1: { unit: "ml", vol: { "0.10": 0.006 } },
};

export const vesselsErrors = {
  cylinders: cylinderErrors,
  volumetric_flask: flaskErrors,
  glass_multi_pipete: glassSinglyPipete,
  glass_singly_pipete: glassMultiPipetesErrors,
  biurettes: glassSinglyPipete,
  electric_pipete: glassSinglyPipete,
  manual_pipete: glassSinglyPipete,
  portionmeter: glassSinglyPipete,
};
