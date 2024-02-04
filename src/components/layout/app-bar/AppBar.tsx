import styles from "./styles.module.scss";
import { AppBar as MUIAppBar, AppBarProps } from "@mui/material";
import NavBar from "../../shared/nav-bar/NavBar";
import Logo from "../../shared/logo/Logo";

const AppBar: React.FC<AppBarProps> = (props) => {
  return (
    <MUIAppBar {...props} className={styles["nav-bar"]}>
      <Logo />

      <NavBar />
    </MUIAppBar>
  );
};

export default AppBar;
