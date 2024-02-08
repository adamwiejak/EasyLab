import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { Box, BoxProps } from "@mui/material";
import ImageButton from "../../shared/card-button/ImageButton";
import { back } from "../../../assets/images/_images";

interface GridContainerProps extends BoxProps {
  backBtn?: { header?: string; text?: string; src?: string };
  children?: React.ReactNode;
}

const GridContainer: React.FC<GridContainerProps> = (props) => {
  const { children, backBtn, ...rest } = props;

  return (
    <Box {...rest} className={styles["container"]}>
      {backBtn && (
        <Link to="../">
          <ImageButton
            imageSrc={backBtn.src || back}
            text={backBtn.text || "Cofnij"}
            header={backBtn.header || "Cofnij"}
          />
        </Link>
      )}

      {children}
    </Box>
  );
};

export default GridContainer;
