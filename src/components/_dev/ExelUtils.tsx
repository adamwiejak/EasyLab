import { Box } from "@mui/material";
import PlaceHolder from "./PlaceHolder";

const ExelUtils = () => {
  return (
    <Box sx={{ placeSelf: "center" }}>
      <input type="file" />
      <PlaceHolder sx={{ mt: 7 }} text="Exel Utils" />;
    </Box>
  );
};

export default ExelUtils;
