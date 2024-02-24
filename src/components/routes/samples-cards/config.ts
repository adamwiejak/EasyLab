import { GridColDef } from "@mui/x-data-grid";

export const initialState = {
  pagination: {},
};

export const columns: GridColDef[] = [
  { field: "id", headerName: "ID" },
  { field: "type", headerName: "Matryca" },
  {
    field: "registerDate",
    headerName: "Data Przyjęcia",
    editable: true,
  },
  {
    field: "deadline",
    headerName: "Termin Realizacji",
    editable: true,
  },
  {
    field: "cleanupDate",
    headerName: "Data Utylizacji",
    editable: true,
  },
];
