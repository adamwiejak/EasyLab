import styled from "./styled";
import { SwipeableDrawerProps } from "@mui/material";
import { useState } from "react";
import Sidebar from "../side-bar/Sidebar";
import IconButton from "../../primitives/IconButton";
import Icon from "../../primitives/Icon";

interface IDrawer
  extends Omit<SwipeableDrawerProps, "open" | "onClose" | "onOpen"> {}

const MobileDrawer: React.FC<IDrawer> = (props) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => setDrawerOpen((prev) => !prev);

  return (
    <>
      <IconButton
        onClick={toggleDrawer}
        icon={<Icon iconName="burger" color="inherit" />}
      />

      <styled.Drawer
        {...props}
        open={drawerOpen}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
      >
        <Sidebar sx={{ flexGrow: 1 }} />
      </styled.Drawer>
    </>
  );
};

export default MobileDrawer;
