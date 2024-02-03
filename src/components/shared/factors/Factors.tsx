import styles from "./factors.module.scss";
import { Box, Toolbar, Typography } from "@mui/material";
import Select from "../../primitives/Select";
import {
  massStandardsDensity,
  thermalExpansionCoefficients,
} from "../../../data/matherials";
import { useState } from "react";

const Factors = () => {
  const [state, setState] = useState<any>(massStandardsDensity.stal);
  const [state2, setState2] = useState<any>(thermalExpansionCoefficients.DURAN);

  const onChange = (e: any) => setState(e.target.value);
  const onChange2 = (e: any) => setState2(e.target.value);

  return (
    <Toolbar className={styles["factors"]}>
      <Box className={styles["container"]}>
        <Select
          value={state}
          onChange={onChange}
          options={massStandardsDensity}
        />
        <Typography variant="h6">Gęstość Wzorca Masy</Typography>
        {state && <Typography>{state.toFixed(2)} [g/cm3]</Typography>}
      </Box>

      <Box className={styles["container"]}>
        <Select
          value={state2}
          onChange={onChange2}
          options={thermalExpansionCoefficients}
        />
        <Typography variant="h6">
          Współczynnik Rozszerzalności Cieplnej
        </Typography>
        {state2 && <Typography>{state2} [1/C]</Typography>}
      </Box>
    </Toolbar>
  );
};

export default Factors;
