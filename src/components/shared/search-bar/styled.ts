import styled from "@mui/material/styles/styled";
import Card from "@mui/material/Card";

const Container = styled(Card)`
  padding: ${({ theme: { spacing } }) => spacing(3, 1, 0, 3)};
  gap: ${({ theme: { spacing } }) => spacing(2)};
  display: grid;
  grid-template-columns: 1fr min-content;
`;

export default {
  Container,
};
