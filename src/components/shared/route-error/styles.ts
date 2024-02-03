import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";

const CardBox = styled(Paper)`
  display: grid;
  padding: ${({ theme: { spacing } }) => spacing(5, 3, 1, 3)};
  gap: ${({ theme: { spacing } }) => spacing(5)};
  min-width: 45vw;
  border-color: ${({ theme: { palette } }) => palette.divider};
`;

CardBox.defaultProps = { elevation: 24 };

const Header = styled(Typography)`
  font-weight: 700;
  letter-spacing: 0.1em;
  text-align: center;
`;

const Paragraph = styled(Typography)`
  word-wrap: no-wrap;
  text-align: center;
`;

const Actions = styled(Box)`
  display: grid;
  grid-auto-flow: column;
  gap: ${({ theme: { spacing } }) => spacing(4)};
  padding: ${({ theme: { spacing } }) => spacing(2)};
`;

export default {
  CardBox,
  Header,
  Actions,
  Paragraph,
};
