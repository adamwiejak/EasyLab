import styles from "./styles.module.scss";
import { Box, BoxProps } from "@mui/material";

interface GridContainerProps extends BoxProps {
  children?: React.ReactNode;
}

const GridContainer: React.FC<GridContainerProps> = (props) => {
  const { children, ...rest } = props;

  return (
    <Box {...rest} className={styles["container"]}>
      {children}
    </Box>
  );
};

export default GridContainer;
