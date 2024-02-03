import styles from "./styles.module.scss";
import { Outlet } from "react-router-dom";
import AppBar from "../../layout/app-bar/AppBar";
import { Box, Container } from "@mui/material";
import Background from "../../shared/background-image/Background";
import { background } from "../../../assets/images/_images";

const Root: React.FC = () => {
  return (
    <Box className={styles["root"]}>
      <AppBar position="relative" />

      <Container className={styles["content"]}>
        <Background src={background} />
        <Outlet />
      </Container>
    </Box>
  );
};

export default Root;
