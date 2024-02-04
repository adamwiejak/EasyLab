import styles from "./styles.module.scss";
import { Avatar, IconButton, Toolbar, ToolbarProps } from "@mui/material";
import { Link } from "react-router-dom";
import Button from "../../primitives/Button";
import MenuIcon from "@mui/icons-material/Menu";

interface INavBar extends ToolbarProps {}

const NavBar: React.FC<INavBar> = (props) => {
  const { ...rest } = props;

  return (
    <Toolbar className={styles["container"]} {...rest}>
      <Link to="/">
        <Button size="large" variant="contained" color="warning" text="Home" />
      </Link>

      <Avatar sx={{ mr: 1 }} />

      <IconButton sx={{ color: "common.gray" }}>
        <MenuIcon />
      </IconButton>
    </Toolbar>
  );
};

export default NavBar;
