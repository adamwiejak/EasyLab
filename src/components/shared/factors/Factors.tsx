import { Box, BoxProps, Typography } from "@mui/material";

interface IFactors extends BoxProps {}

const Factors: React.FC<IFactors> = (props) => {
  const { ...rest } = props;

  return (
    <Box {...rest}>
      <span>
        <Typography>
          Współczynnik Z = <span>1.0002</span>
        </Typography>
        <Typography>
          Błąd Systematyczny = <span>69 ml</span>
        </Typography>
        <Typography>
          Błąd Przypadkowy = <span> Nie dotyczy</span>
        </Typography>
      </span>
    </Box>
  );
};

export default Factors;
