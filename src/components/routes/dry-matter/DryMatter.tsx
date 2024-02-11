import { Typography } from "@mui/material";
import styled from "./styled";
import { Outlet } from "react-router-dom";

const DryMatter = () => {
  return (
    <styled.Container>
      <Typography variant="h2">Kalkulator Suchej Masy</Typography>

      <Outlet />
    </styled.Container>
  );
};

export default DryMatter;
