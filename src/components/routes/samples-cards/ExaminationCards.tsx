import { DataGrid } from "@mui/x-data-grid";
import { columns, initialState } from "./config";
import { Card } from "@mui/material";
import { DUMMY_SAMPLES_LIST } from "../../../data/_DUMMY_DATA/dummy-samples-list";

const ExaminationCards = () => {
  return (
    <Card sx={{ height: "100%", width: "100%" }}>
      <DataGrid
        rows={DUMMY_SAMPLES_LIST}
        columns={columns}
        initialState={initialState}
        autoPageSize
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Card>
  );
};

export default ExaminationCards;
