import { useParams } from "react-router-dom";
import PlaceHolder from "../../_dev/PlaceHolder";
import { Box, Typography } from "@mui/material";

const NotebooksList = () => {
  const { analysis } = useParams();

  return (
    <Box sx={{ placeSelf: "center", textAlign: "center" }}>
      <Typography> {analysis}</Typography>
      <PlaceHolder text="Notebook List" />
    </Box>
  );
};

export default NotebooksList;
