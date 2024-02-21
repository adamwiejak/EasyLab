import { Box, styled } from "@mui/material";

const Wrapper = styled(Box)`
  display: grid;
  place-content: center;
  place-items: center;
  grid-auto-flow: column;
  padding: ${({ theme: { spacing } }) => spacing(4, 3)};
`;

export default { Wrapper };
