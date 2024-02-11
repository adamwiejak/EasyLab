import styled from "./styled";
import { Link } from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { analysisSidebarButtons } from "../../../data/procedures";
import { useState } from "react";

const AnalisisList = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <styled.Container>
      {analysisSidebarButtons.map(({ icon, text, href }, idx) => (
        <Link key={text} to={href} onClick={() => setActive(idx)}>
          <ListItem
            key={text}
            disablePadding
            sx={{ color: active === idx ? "warning.dark" : "auto" }}
          >
            <ListItemButton>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText>{text}</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
      ))}
    </styled.Container>
  );
};

export default AnalisisList;
