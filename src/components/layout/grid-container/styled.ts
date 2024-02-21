import { Box, BoxProps, styled } from "@mui/material";
import { excludeStyledProps } from "../../../helpers/functions";

export interface StyledProps extends BoxProps {
  cellSize?: string;
}

const shouldForwardProp = excludeStyledProps(["cellSize"]);

const Container = styled(Box, { shouldForwardProp })<StyledProps>`
  width: 100%;
  place-self: start;
  place-content: start;
  display: grid;
  transform-origin: left top;
  grid-auto-rows: min-content;
  transition: all 0.15s ease-in-out;
  gap: ${({ theme: { spacing } }) => spacing(2)};

  grid-template-columns: ${({ cellSize }) =>
    `repeat(auto-fill, minmax(${cellSize || "17rem"}, 1fr))`};

  grid-template-rows: ${({ cellSize }) =>
    `repeat(auto-fill, minmax(${cellSize || "17rem"}, 1fr))`};
`;

export default { Container };
