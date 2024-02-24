import styled from "./styled";
import { Outlet } from "react-router-dom";
import AppBar from "../../layout/app-bar/AppBar";
import Sidebar from "../../layout/side-bar/Sidebar";
import { useMediaQuery } from "@mui/material";

const Root: React.FC = () => {
  const decktop = useMediaQuery("(min-width:768px)");

  return (
    <styled.Wrapper>
      <AppBar sx={{ gridArea: "header" }} />

      {decktop && <Sidebar sx={{ gridArea: "sidebar" }} />}

      <styled.Main>
        <Outlet />
      </styled.Main>
    </styled.Wrapper>
  );
};

export default Root;
