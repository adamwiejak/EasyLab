import styles from "./styles.module.scss";
import { Box, Card, Typography } from "@mui/material";
import { VesselType } from "../../../types";
import { vesselsErrors } from "../../../data/vol-errors";
import Button from "../../primitives/Button";

interface Calculator {
  vesselType: VesselType;
  currVolume: number | undefined;
}

const Calculator: React.FC<Calculator> = (props) => {
  const { currVolume, vesselType } = props;

  const errors = vesselsErrors[vesselType][currVolume || 0];

  return (
    <Card className={styles["container"]}>
      <span>
        <Button text="Dodaj" />
        <Button text="Dodaj" />
      </span>
      <Typography variant="h6">Calculator</Typography>
    </Card>
  );
};

export default Calculator;
