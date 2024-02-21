import styled from "@mui/material/styles/styled";
import { Box, Card } from "@mui/material";

const Container = styled(Card)`
  min-width: 20vw;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled(Card)`
  display: grid;
  place-content: center;
`;

const Main = styled(Box)`
  height: 100%;
  overflow-y: hidden;
`;

const Footer = styled(Card)`
  height: min-content;
  overflow: visible;
  direction: rtl;
`;

export default { Container, Header, Main, Footer };
