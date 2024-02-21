import { Link } from "react-router-dom";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import type { ListItemButtonProps } from "@mui/material";
import type { Icon } from "../../assets/icons/_icons";

export interface INavButton extends ListItemButtonProps {
  icon: Icon;
  text: string;
  href: string;
}

const NavButton: React.FC<INavButton> = (props) => {
  const { text, href, icon, selected, disabled, ...rest } = props;

  return (
    <Link to={href} className={disabled || selected ? `link-disabled` : ""}>
      <ListItem disablePadding color="primary">
        <ListItemButton {...rest} disabled={disabled} selected={selected}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText>{text}</ListItemText>
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default NavButton;
