import { IMediaCard } from "../../components/shared/media-card/MediaCard";
import { vesselsErrors } from "./volume-errors";

export type Volume = number;
export type VolumeUnit = "ml" | "µl";
export type VesselType = keyof typeof vesselsErrors;
export type MultiPipeteGraduate = "0.20" | "0.10" | "0.05" | "0.02" | "0.01";
export type MultiPipeteError = Partial<Record<MultiPipeteGraduate, number>>;

export interface VesselError {
  unit: VolumeUnit;
  volErr: number | MultiPipeteError;
  repErrPercent?: number;
  volErrPercent?: number;
}

export type VesselErrors = Record<Volume, VesselError>;

export interface VesselAsset extends Omit<IMediaCard, "height"> {
  vesselType: VesselType;
}
