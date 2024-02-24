import { Box, BoxProps, styled } from "@mui/material";
import { excludeStyledProps } from "../../../helpers/functions";

export interface StyledProps extends BoxProps {
  cellSize?: string;
}

const shouldForwardProp = excludeStyledProps(["cellSize"]);

const Container = styled(Box, { shouldForwardProp })<StyledProps>`
  height: 100%;
  display: grid;
  overflow-y: auto;
  place-content: start;
  gap: ${({ theme: { spacing } }) => spacing(2)};
  padding: ${({ theme: { spacing } }) => spacing(2)};

  grid-template-columns: ${({ cellSize }) =>
    `repeat(auto-fill, minmax(${cellSize || "17rem"}, 1fr))`};
`;

export default { Container };
