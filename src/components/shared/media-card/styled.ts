import styled from "@mui/material/styles/styled";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContentMUI from "@mui/material/CardContent";

export const Container = styled(Card)`
  height: 100%;
  width: 100%;
  transition: all 0.2s ease-in-out;
  filter: brightness(0.7) grayscale(0.6);

  &:hover {
    filter: brightness(1) grayscale(0);
  }
`;

Container.defaultProps = {
  variant: "outlined",
};

export const ActionArea = styled(CardActionArea)`
  height: 100%;
  display: grid;
  place-items: stretch;
  place-content: stretch;
  transition: all 0.15s ease-in;
  grid-template-rows: 1fr min-content;

  img {
    filter: brightness(0.6) blur(1px);
  }

  &:hover img {
    filter: blur(0);
  }
`;

export const CardContent = styled(CardContentMUI)`
  /* max-height: 50%; */
`;
