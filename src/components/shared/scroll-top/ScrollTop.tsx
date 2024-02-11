import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Box, Fab, Fade } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

const ScrollTop: React.FC = () => {
  const [open] = useState(true);
  const ref = useRef<Element>();

  const onClick = (e: React.MouseEvent<Element>) => {
    const anchor = e.currentTarget.parentElement;
    console.log(anchor);
    anchor?.scrollTo(0, 0);
  };

  const onScroll = (container: Element) => () => {
    console.log(container);
    // const rect = container.getBoundingClientRect();
    // console.log(e);
  };

  useEffect(() => {
    const container = ref.current?.parentElement;
    if (!container) return;
    container.addEventListener("wheel", onScroll(container));
    return () => container.removeEventListener("scroll", onScroll(container));
  }, []);

  return (
    <Fade in={open}>
      <Box
        ref={ref}
        onClick={onClick}
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        <Fab size="small">
          <KeyboardArrowUpIcon />
        </Fab>
      </Box>
    </Fade>
  );
};

export default ScrollTop;
