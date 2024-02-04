import { vesselsErrors } from "../data/vol-errors";
import { VesselType } from "../types";

export const getVesselErrorsValue = (
  vesselType: VesselType,
  volume: number
) => {
  const { unit, vol, repPercent } = vesselsErrors[vesselType][volume];

  const error = typeof vol === "number" ? vol.toFixed(4) : 0;
};
