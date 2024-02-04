import styles from "./styles.module.scss";
import { Card, CardProps, Typography } from "@mui/material";

interface IFactors extends CardProps {}

const Factors: React.FC<IFactors> = (props) => {
  const { ...rest } = props;

  return (
    <Card {...rest} className={styles["container"]}>
      <Typography>Typ: Kolba Miarowa</Typography>
      <Typography>Objętość: 500 ml</Typography>
      <Typography>Współczynnik Z: 1.0002</Typography>
      <Typography>Błąd Systematyczny: 69 ml</Typography>
      <Typography>Błąd Przypadkowy: Nie dotyczy</Typography>
    </Card>
  );
};

export default Factors;
