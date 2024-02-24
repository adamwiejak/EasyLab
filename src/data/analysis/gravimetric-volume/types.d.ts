import { vesselsErrors } from "./errors";

export type Volume = number;
export type VolumeUnit = "ml" | "µl";
export type VesselType = keyof typeof vesselsErrors;
export type MultiPipeteGraduate = "0.20" | "0.10" | "0.05" | "0.02" | "0.01";
export type VesselErrors = Record<Volume, VesselError>;
export type MultiPipeteError = Partial<Record<MultiPipeteGraduate, number>>;

export interface VesselError {
  unit: VolumeUnit;
  volErr: number | MultiPipeteError;
  repErrPercent?: number;
  volErrPercent?: number;
}

export interface VesselAsset {
  vesselType: VesselType;
  imageSrc: string;
  header: string;
  title: string;
}

export interface Notebook {
  id: string;
  date: string;
}
