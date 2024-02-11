import { VesselErrors } from "./types";

const flaskErrors: VesselErrors = {
  5000: { unit: "ml", volErr: 1.2 },
  2000: { unit: "ml", volErr: 0.6 },
  1000: { unit: "ml", volErr: 0.4 },
  500: { unit: "ml", volErr: 0.25 },
  250: { unit: "ml", volErr: 0.15 },
  200: { unit: "ml", volErr: 0.15 },
  100: { unit: "ml", volErr: 0.1 },
  50: { unit: "ml", volErr: 0.06 },
  25: { unit: "ml", volErr: 0.04 },
  20: { unit: "ml", volErr: 0.025 },
  10: { unit: "ml", volErr: 0.025 },
  5: { unit: "ml", volErr: 0.025 },
  2: { unit: "ml", volErr: 0.025 },
  1: { unit: "ml", volErr: 0.025 },
};

const cylinderErrors: VesselErrors = {
  2000: { unit: "ml", volErr: 10 },
  1000: { unit: "ml", volErr: 5 },
  500: { unit: "ml", volErr: 2.5 },
  250: { unit: "ml", volErr: 1 },
  100: { unit: "ml", volErr: 0.5 },
  50: { unit: "ml", volErr: 0.5 },
  25: { unit: "ml", volErr: 0.25 },
  10: { unit: "ml", volErr: 0.1 },
  5: { unit: "ml", volErr: 0.05 },
};

const glassMultiPipetesErrors: VesselErrors = {
  100: { unit: "ml", volErr: 0.08 },
  50: { unit: "ml", volErr: 0.05 },
  25: { unit: "ml", volErr: 0.03 },
  20: { unit: "ml", volErr: 0.03 },
  10: { unit: "ml", volErr: 0.02 },
  5: { unit: "ml", volErr: 0.015 },
  2: { unit: "ml", volErr: 0.01 },
  1: { unit: "ml", volErr: 0.008 },
  0.5: { unit: "ml", volErr: 0.005 },
};

const glassSinglyPipete: VesselErrors = {
  25: { unit: "ml", volErr: { "0.20": 0.1, "0.10": 0.1 } },
  20: { unit: "ml", volErr: { "0.10": 0.1 } },
  10: { unit: "ml", volErr: { "0.10": 0.05 } },
  5: { unit: "ml", volErr: { "0.10": 0.03, "0.05": 0.01 } },
  2: { unit: "ml", volErr: { "0.10": 0.03, "0.02": 0.03 } },
  1: { unit: "ml", volErr: { "0.10": 0.007, "0.01": 0.007 } },
  0.5: { unit: "ml", volErr: { "0.01": 0.006 } },
  0.2: { unit: "ml", volErr: { "0.01": 0.006 } },
  0.1: { unit: "ml", volErr: { "0.10": 0.006 } },
};

const automaticPipette: VesselErrors = {
  10000: { unit: "µl", volErr: 80, volErrPercent: 0.8, repErrPercent: 0.3 },
  5000: { unit: "µl", volErr: 40, volErrPercent: 0.8, repErrPercent: 0.3 },
  2000: { unit: "µl", volErr: 16, volErrPercent: 0.8, repErrPercent: 0.3 },
  1000: { unit: "µl", volErr: 8, volErrPercent: 0.8, repErrPercent: 0.3 },
  500: { unit: "µl", volErr: 4, volErrPercent: 0.8, repErrPercent: 0.3 },
  200: { unit: "µl", volErr: 1.6, volErrPercent: 0.8, repErrPercent: 0.3 },
  100: { unit: "µl", volErr: 0.8, volErrPercent: 0.8, repErrPercent: 0.3 },
  50: { unit: "µl", volErr: 0.5, volErrPercent: 1, repErrPercent: 0.4 },
  20: { unit: "µl", volErr: 0.2, volErrPercent: 1, repErrPercent: 0.5 },
};

export const vesselsErrors = {
  cylinders: cylinderErrors,
  volumetric_flask: flaskErrors,
  glass_multi_pipete: glassSinglyPipete,
  glass_singly_pipete: glassMultiPipetesErrors,
  electric_pipete: automaticPipette,
  manual_pipete: automaticPipette,
  biurettes: glassSinglyPipete,
  portionmeters: glassSinglyPipete,
};
