import styles from "./styles.module.scss";
import { AppBar as MUIAppBar, Avatar, AppBarProps } from "@mui/material";
import Factors from "../../shared/factors/Factors";

const AppBar: React.FC<AppBarProps> = (props) => {
  return (
    <MUIAppBar {...props} className={styles["nav-bar"]}>
      <Factors />
      <Avatar sx={{ mr: 1 }} />
    </MUIAppBar>
  );
};

export default AppBar;
