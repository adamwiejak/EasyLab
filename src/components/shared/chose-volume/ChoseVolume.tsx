import * as styled from "./styled";
import { CardProps } from "@mui/material";
import Button from "../../primitives/Button";
import { vesselsErrors } from "../../../data/vol-errors";
import { VesselType } from "../../../types";

interface ChoseVolume extends CardProps {
  currVolume: number | undefined;
  vesselType: VesselType;
  onChangeVolume: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const ChoseVolume: React.FC<ChoseVolume> = (props) => {
  const { onChangeVolume, currVolume, vesselType, ...rest } = props;

  const volumes = Object.keys(vesselsErrors[vesselType]).map((vol) => +vol);

  return (
    <styled.Container {...rest}>
      {volumes.map((volume) => (
        <Button
          key={volume}
          size="large"
          text={`${volume.toString()}`}
          onClick={() => onChangeVolume(volume)}
          color={currVolume === volume ? "secondary" : "primary"}
          variant={currVolume === volume ? "contained" : "outlined"}
        />
      ))}
    </styled.Container>
  );
};

export default ChoseVolume;
