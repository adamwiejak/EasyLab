import { Box, Card, styled } from "@mui/material";
import GridContainer from "../../layout/grid-container/GridContainer";

const Wrapper = styled(Box)`
  display: grid;
  height: 100%;
  grid-template-rows: min-content 1fr;
`;

const Header = styled(Card)`
  display: flex;
  place-content: end;
  align-items: center;
`;

const Content = styled(GridContainer)``;

export default { Wrapper, Header, Content };
