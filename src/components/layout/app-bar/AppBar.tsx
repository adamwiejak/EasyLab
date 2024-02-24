import styled from "./styled";
import type { AppBarProps } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Logo from "../../shared/logo/Logo";
import MobileDrawer from "../mobile-drawer/MobileDrawer";

const AppBar: React.FC<AppBarProps> = (props) => {
  return (
    <styled.Bar position="static" {...props}>
      <Toolbar>{/* <CurrentNotebook /> */}</Toolbar>

      <Toolbar>
        <Logo />
        {/* <NavBar /> */}
        <MobileDrawer />
      </Toolbar>
    </styled.Bar>
  );
};

export default AppBar;
