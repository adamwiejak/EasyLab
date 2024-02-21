import styled from "./styled";
import Logo from "../../shared/logo/Logo";
import { sidebarFooterButtons } from "./config";
import AnalisisList from "../../shared/analisis-list/AnalisisList";
import { CardProps } from "@mui/material";
import NavButton from "../../primitives/NavButton";
import Icon from "../../primitives/Icon";
import { useLocation } from "react-router-dom";

const Sidebar: React.FC<CardProps> = (props) => {
  const { pathname } = useLocation();

  return (
    <styled.Container raised elevation={10} {...props}>
      <styled.Header raised elevation={10}>
        <Logo />
      </styled.Header>

      <styled.Main>
        <AnalisisList />
      </styled.Main>

      <styled.Footer variant="outlined">
        {sidebarFooterButtons.map(({ icon, href, text }) => (
          <NavButton
            key={text}
            text={text}
            href={href}
            selected={pathname.includes(href)}
            icon={
              <Icon
                iconName={icon}
                color={pathname.includes(href) ? "primary" : "disabled"}
              />
            }
          />
        ))}
      </styled.Footer>
    </styled.Container>
  );
};

export default Sidebar;
