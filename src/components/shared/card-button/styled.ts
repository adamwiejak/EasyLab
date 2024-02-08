import styled from "@mui/material/styles/styled";
import CardMUI from "@mui/material/Card";
import CardActionAreaMUI from "@mui/material/CardActionArea";
import CardContentMUI from "@mui/material/CardContent";

export const Card = styled(CardMUI)`
  height: 100%;
  filter: brightness(0.65);
  transition: all 0.15s ease-in-out;

  &:hover {
    filter: brightness(1);
  }
`;

export const CardActionArea = styled(CardActionAreaMUI)`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: start;

  img {
    flex-grow: 1;
  }
`;

export const CardContent = styled(CardContentMUI)``;
