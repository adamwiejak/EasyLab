import styled from "./styled";
import Factors from "../../../_dev/factors/Factors";
import type { VesselType } from "../../../../data/analysis/gravimetric-volume/types";
import { Typography } from "@mui/material";
import { vesselsErrors } from "../../../../data/analysis/gravimetric-volume/errors";

interface ICalculator {
  vesselType: VesselType;
}

const VesselCalculator: React.FC<ICalculator> = (props) => {
  const { vesselType, ...rest } = props;

  // const [searchParams] = useSearchParams();
  // const [currVolume, setCurrVolume] = useState<number>();
  // const vesselType = searchParams.get("vessel") as VesselType;

  return (
    <styled.Container {...rest}>
      <Typography sx={{ my: 2 }}>{vesselType}</Typography>
      <Typography>{JSON.stringify(vesselsErrors[vesselType])}</Typography>

      <styled.Footer elevation={24}>
        {/* <ChoseMatherials/> */}
        <Factors />
      </styled.Footer>
    </styled.Container>
  );
};

export default VesselCalculator;
