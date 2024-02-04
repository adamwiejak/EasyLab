import { Box, Typography } from "@mui/material";
import Button from "../../primitives/Button";
import { Link } from "react-router-dom";

const Other = () => {
  return (
    <Box
      sx={{
        height: "100%",
        display: "grid",
        placeItems: "center",
        placeContent: "center",
      }}
    >
      <Typography variant="h2">Other Procedure</Typography>

      <Link to="/">
        <Button size="large" variant="contained" text="Home" />
      </Link>
    </Box>
  );
};

export default Other;
