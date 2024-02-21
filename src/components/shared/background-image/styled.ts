import styled from "@mui/material/styles/styled";
import Box from "@mui/material/Box";

const Wrapper = styled(Box)`
  inset: 0;
  z-index: -1;
  position: absolute;
  pointer-events: none;
  background-color: ${({ theme: { palette } }) => palette.common.unactive};

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-position: center;
    filter: blur(4px) brightness(0.45) opacity(0.15);
    object-fit: contain;
  }
`;

export default { Wrapper };
