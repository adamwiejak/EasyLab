import styled from "./styled";
import type { AppBarProps } from "@mui/material";
import Logo from "../../shared/logo/Logo";
import NavBar from "../../shared/nav-bar/NavBar";
import MobileDrawer from "../mobile-drawer/MobileDrawer";

const AppBar: React.FC<AppBarProps> = (props) => {
  return (
    <styled.Bar {...props}>
      <Logo />
      <NavBar />
      <MobileDrawer />
    </styled.Bar>
  );
};

export default AppBar;
