import { Card } from "@mui/material";
import styled from "@mui/material/styles/styled";

const Container = styled(Card)`
  text-align: center;
  height: 100%;
  display: grid;
  grid-template-rows: min-content 1fr;
  padding: ${({ theme: { spacing } }) => spacing(1)};
`;

const Footer = styled(Card)`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  padding: ${({ theme: { spacing } }) => spacing(3)};
`;

export default { Container, Footer };
