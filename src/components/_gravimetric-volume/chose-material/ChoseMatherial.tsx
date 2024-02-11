import styles from "./styles.module.scss";
import { Box, SelectChangeEvent, Typography } from "@mui/material";
import Select from "../../primitives/Select";
import * as matherials from "../../../data/gravimetric-volume/matherials";
import { useAppDispatch, useAppSelector } from "../../../store/Store";
import { gravimetricVolume } from "../../../store/gravimetric-volume-slice/slice";

const ChoseMatherials = () => {
  const dispatch = useAppDispatch();

  const { massStandardDensity, thermalExpansionCoefficient } = useAppSelector(
    (store) => store.gravimetricVolume
  );

  const onChange = () => {};

  const onThermalExpansionCoefficientChange = (
    e: SelectChangeEvent<unknown>
  ) => {
    const value = e.target.value as number;
    dispatch(gravimetricVolume.setThermalExpansionCoefficient(value));
  };
  return (
    <Box className={styles["tollbar"]}>
      <Box className={styles["box"]}>
        <Select
          size="small"
          onChange={onChange}
          value={massStandardDensity.value}
          options={matherials.massStandardsDensity}
        />
        <Typography>
          Gęstość Wzorca Masy
          <span>{` ${massStandardDensity.value} [${massStandardDensity.unit}]`}</span>
        </Typography>
      </Box>

      <Box className={styles["box"]}>
        <Select
          size="small"
          value={thermalExpansionCoefficient.value}
          onChange={onThermalExpansionCoefficientChange}
          options={matherials.thermalExpansionCoefficients}
        />
        <Typography>
          Współczynnik Rozszerzalności Cieplnej
          <span>{` ${thermalExpansionCoefficient.value.toExponential()} [${
            thermalExpansionCoefficient.unit
          }]`}</span>
        </Typography>
      </Box>
    </Box>
  );
};

export default ChoseMatherials;
