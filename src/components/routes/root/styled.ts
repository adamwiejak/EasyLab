import styled from "@mui/material/styles/styled";
import Box from "@mui/material/Box";

const Wrapper = styled(Box)`
  height: 100vh;
  display: grid;
  overflow: hidden;
  grid-template-rows: min-content 1fr;
  grid-template-columns: minmax(0, max-content) 1fr;
  grid-template-areas:
    "sidebar header"
    "sidebar main"
    "footer footer";
`;

const Main = styled(Box)`
  display: grid;
  grid-area: main;
  overflow-y: hidden;
`;

export default { Wrapper, Main };
