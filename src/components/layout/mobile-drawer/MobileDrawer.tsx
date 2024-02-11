import styled from "./styled";
import { SwipeableDrawerProps } from "@mui/material";
import { useState } from "react";
import Sidebar from "../side-bar/Sidebar";
// import icons from "../../../assets/icons/_icons";
// import IconButton from "../../primitives/IconButton";

interface IDrawer
  extends Omit<SwipeableDrawerProps, "open" | "onClose" | "onOpen"> {}

const MobileDrawer: React.FC<IDrawer> = (props) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => setDrawerOpen((prev) => !prev);

  return (
    <>
      {/* <IconButton onClick={toggleDrawer} icon={icons.BurgerIcon} /> */}

      <styled.Drawer
        {...props}
        open={drawerOpen}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
        onClick={toggleDrawer}
      >
        <Sidebar sx={{ flexGrow: 1 }} />
      </styled.Drawer>
    </>
  );
};

export default MobileDrawer;
