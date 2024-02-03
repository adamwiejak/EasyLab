import { useMemo } from "react";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import MUISelect from "@mui/material/Select";
import type { SelectProps as MUISelectProps } from "@mui/material";

export interface SelectProps extends MUISelectProps {
  helperText?: string;
  options: Record<string, string | number>;
}

const Select: React.FC<SelectProps> = (props) => {
  const { label, options, helperText, error, ...rest } = props;
  const keys = useMemo(() => Object.keys(options), [options]);

  return (
    <FormControl error={error}>
      {label && <InputLabel>{label}</InputLabel>}

      <MUISelect {...rest} label={label}>
        {keys.map((key) => (
          <MenuItem key={key} value={options[key]}>
            {key}
          </MenuItem>
        ))}
      </MUISelect>

      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};

export default Select;
