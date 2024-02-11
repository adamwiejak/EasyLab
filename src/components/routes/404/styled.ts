import { Box, styled } from "@mui/material";

const Page = styled(Box)`
  display: grid;
  place-items: center;
  height: 100vh;

  img {
    position: fixed;
    inset: 0;
    width: 100%;
    opacity: 0.55;
  }
`;

export { Page };
