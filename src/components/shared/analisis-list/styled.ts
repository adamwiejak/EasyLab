import styled from "@mui/material/styles/styled";
import ListMUI from "@mui/material/List";
import Box from "@mui/material/Box";

const Container = styled(Box)`
  display: grid;
  height: 100%;
  overflow-y: hidden;
  padding: ${({ theme: { spacing } }) => spacing(1, 0)};
  grid-template-rows: min-content 1fr;
`;

const List = styled(ListMUI)`
  height: 100%;
  overflow-y: auto;
`;

export default { Container, List };
