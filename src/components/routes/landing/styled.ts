import { Box, styled } from "@mui/material";
import GridContainer from "../../layout/grid-container/GridContainer";

interface StyledProps {
  shrink?: boolean;
}

const Wrapper = styled(Box)<StyledProps>`
  display: grid;
  grid-auto-rows: min-content;
  gap: ${({ theme: { spacing } }) => spacing(2)};
  height: 100%;
`;

const Header = styled(GridContainer)<StyledProps>`
  transform: ${(props) => (props.shrink ? "scale(0.35)" : "")};
`;

const Content = styled(GridContainer)<StyledProps>`
  transform: ${(props) => (props.shrink ? "scale(0.35)" : "")};
`;

export default { Wrapper, Header, Content };
