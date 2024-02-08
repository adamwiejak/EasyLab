import { IImageButton } from "./components/shared/card-button/ImageButton";
import { vesselsErrors } from "./data/vol-errors";

export type VesselType = keyof typeof vesselsErrors;

export type VolUnit = "ml" | "µl";
export type MultiPipeteGraduate = "0.20" | "0.10" | "0.05" | "0.02" | "0.01";
export type MultiPipeteError = Partial<Record<MultiPipeteGraduate, number>>;

export interface VesselAsset extends IImageButton {
  vesselType: VesselType;
}

export interface VesselErrors {
  unit: "ml" | "µl";
  vol: number | MultiPipeteError;
  repPercent?: number;
  volPercent?: number;
}
