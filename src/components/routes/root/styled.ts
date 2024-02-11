import styled from "@mui/material/styles/styled";
import Box from "@mui/material/Box";
import { Card } from "@mui/material";

const Wrapper = styled(Box)`
  height: 100vh;
  overflow: hidden;
  display: grid;
  gap: ${({ theme: { spacing } }) => spacing(1)};
  grid-template-columns: minmax(0, min-content) 1fr;
  grid-template-rows: min-content 1fr min-content;
  grid-template-areas:
    "sidebar header"
    "sidebar main"
    "footer footer";
`;

const Header = styled(Card)`
  grid-area: header;
  display: flex;
`;

const Sidebar = styled(Box)`
  display: grid;
  grid-area: sidebar;
`;

const Main = styled(Box)`
  padding: 0.2rem;

  grid-area: main;
  height: 100%;
  overflow-y: auto;
`;

export default { Wrapper, Header, Sidebar, Main };
