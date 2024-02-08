import styled from "./styled";
import { CardProps, IconButton } from "@mui/material";
import { VesselType } from "../../../types";
import { MinorCrashRounded, PlusOneRounded } from "@mui/icons-material";

interface Calculator extends CardProps {
  vesselType: VesselType;
  currVolume: number | undefined;
}

const Calculator: React.FC<Calculator> = (props) => {
  const { currVolume, vesselType, ...rest } = props;

  return (
    <styled.Container {...rest}>
      <span>
        <IconButton>
          <PlusOneRounded />
        </IconButton>

        <IconButton>
          <MinorCrashRounded />
        </IconButton>
      </span>
    </styled.Container>
  );
};

export default Calculator;
