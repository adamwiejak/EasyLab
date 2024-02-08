import styles from "./styles.module.scss";
import { Avatar, IconButton, Toolbar, ToolbarProps } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface INavBar extends ToolbarProps {}

const NavBar: React.FC<INavBar> = (props) => {
  const { ...rest } = props;

  return (
    <Toolbar className={styles["container"]} {...rest}>
      <Avatar sx={{ mr: 1 }} />

      <IconButton sx={{ color: "common.gray" }}>
        <MenuIcon />
      </IconButton>
    </Toolbar>
  );
};

export default NavBar;
