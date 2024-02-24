import styled from "./styled";
import Logo from "../../shared/logo/Logo";
import AnalisisList from "../../shared/analysis-list/AnalisisList";
import { CardProps } from "@mui/material";
import NavButton from "../../primitives/NavButton";
import Icon from "../../primitives/Icon";
import { useLocation } from "react-router-dom";
import { sidebarFooterButtons } from "./config";

const Sidebar: React.FC<CardProps> = (props) => {
  const { pathname } = useLocation();

  return (
    <styled.Container {...props} variant="outlined" raised={false}>
      <styled.Header raised elevation={10}>
        <Logo />
      </styled.Header>

      <styled.Main>
        <AnalisisList />
      </styled.Main>

      <styled.Footer>
        {sidebarFooterButtons.map(({ icon, href, title }) => (
          <NavButton
            key={href}
            href={href}
            text={title}
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
