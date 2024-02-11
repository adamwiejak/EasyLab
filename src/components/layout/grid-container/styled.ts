import { Box, styled } from "@mui/material";

const Container = styled(Box)`
  display: grid;
  gap: ${({ theme: { spacing } }) => spacing(3)};
  grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
`;

export default { Container };
