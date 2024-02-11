import styled from "@mui/material/styles/styled";
import Box from "@mui/material/Box";

const Wrapper = styled(Box)`
  position: absolute;
  inset: 0;
  z-index: -1;
  background-color: var(--color-dark-1);

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.2;
    filter: blur(5px) brightness(0.5);
  }
`;

export default { Wrapper };
