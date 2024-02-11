import styled from "./styled";
import { Typography } from "@mui/material";

const Landing = () => {
  return (
    <styled.Container>
      <Typography sx={{ width: "70%", textAlign: "center" }} variant="h1">
        Aktualności, Ostatnia Aktywność Itp.
      </Typography>
    </styled.Container>
  );
};

export default Landing;
