import styled from "@emotion/styled";
import Card from "@mui/material/Card";

export const Container = styled(Card)`
  height: 100%;
  aspect-ratio: 16/9;
  filter: brightness(0.65);
  transition: all 0.15s ease-in-out;

  &:hover {
    filter: "brightness(1)";
  }
`;
