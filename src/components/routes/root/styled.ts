import styled from "@mui/material/styles/styled";
import Box from "@mui/material/Box";

const Wrapper = styled(Box)`
  height: 100vh;
  display: grid;
  overflow: hidden;
  grid-template-rows: min-content 1fr;
  gap: ${({ theme: { spacing } }) => spacing(1)};
  grid-template-columns: minmax(0, min-content) 1fr;
  grid-template-areas:
    "sidebar header"
    "sidebar main"
    "footer footer";
`;

const Header = styled(Box)`
  grid-area: header;
  display: flex;
`;

const Sidebar = styled(Box)`
  grid-area: sidebar;
`;

const Main = styled(Box)`
  grid-area: main;
  display: grid;
  position: relative;
  overflow-y: auto;
  padding: ${({ theme: { spacing } }) => spacing(2)};
`;

export default { Wrapper, Header, Sidebar, Main };
