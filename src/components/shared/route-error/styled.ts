import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

export const Container = styled(Card)`
  display: grid;
  place-self: center;
  padding: ${({ theme: { spacing } }) => spacing(5, 3, 1, 3)};
  gap: ${({ theme: { spacing } }) => spacing(5)};
  min-width: 45vw;
  border-color: ${({ theme: { palette } }) => palette.divider};
`;
Container.defaultProps = { elevation: 24 };

export const Header = styled(Typography)`
  font-weight: 900;
  letter-spacing: 0.1em;
  text-align: center;
`;

export const Paragraph = styled(Typography)`
  word-wrap: no-wrap;
  text-align: center;
`;

export const Actions = styled(Box)`
  display: grid;
  grid-auto-flow: column;
  gap: ${({ theme: { spacing } }) => spacing(4)};
  padding: ${({ theme: { spacing } }) => spacing(2)};
`;
