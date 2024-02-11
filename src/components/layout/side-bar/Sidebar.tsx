import styled from "./styled";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Logo from "../../shared/logo/Logo";
import { Link } from "react-router-dom";
import { sidebarFooterButtons } from "./config";
import AnalisisList from "../../shared/analisis-list/AnalisisList";
import { CardProps } from "@mui/material";

const Sidebar: React.FC<CardProps> = (props) => {
  return (
    <styled.Container {...props}>
      <Logo sx={{ placeSelf: "center" }} />

      <Divider />

      <styled.Main>
        <AnalisisList />
      </styled.Main>

      <Divider />

      <styled.Footer>
        {sidebarFooterButtons.map(({ icon, href, text }) => (
          <Link key={text} to={href}>
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText>{text}</ListItemText>
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </styled.Footer>
    </styled.Container>
  );
};

export default Sidebar;
