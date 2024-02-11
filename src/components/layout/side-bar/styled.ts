import styled from "@mui/material/styles/styled";
import { Card, List } from "@mui/material";

const Container = styled(Card)`
  /* height: 100%;
  display: grid;
  grid-auto-rows: min-content; */

  min-width: 20vw;
  display: flex;
  flex-direction: column;
`;

const Main = styled(List)`
  height: 100%;
  overflow-y: auto;
`;

const Footer = styled(List)``;

export default { Container, Main, Footer };
