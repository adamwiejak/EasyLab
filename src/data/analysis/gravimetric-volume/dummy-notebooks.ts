import { generateDate } from "../../../helpers/functions";
import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
  { field: "id", headerName: "ID" },
  { field: "date", headerName: "Data" },
  { field: "vesselType", headerName: "Naczynie" },
  { field: "volume", headerName: "Objętośc" },
];

export const GRAVIMETRIC_VOLUME_DUMMY_NOTEBOOKS = [
  {
    id: "KO200A0023",
    vesselType: "Kolba Miarowe",
    volume: 200,
    date: generateDate(),
  },
  {
    id: "CY500A0012",
    vesselType: "Cylinder Miarowy",
    volume: 500,
    date: generateDate(),
  },
];
