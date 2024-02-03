import styles from "./styles.module.scss";
import { Box } from "@mui/material";
import React from "react";

interface BackgroundImageProps {
  src: string;
  alt?: string;
}

const Background: React.FC<BackgroundImageProps> = (props) => {
  const { src, alt } = props;

  return (
    <Box className={styles["background"]}>
      <img src={src} alt={alt || "backrgound image"} />
    </Box>
  );
};

export default Background;
