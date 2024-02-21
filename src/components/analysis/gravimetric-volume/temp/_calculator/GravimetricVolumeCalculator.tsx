import styled from "./styled";
import Factors from "../../../../shared/factors/Factors";

const CalculateGravimetricVolume = () => {
  // const [searchParams] = useSearchParams();
  // const [currVolume, setCurrVolume] = useState<number>();
  // const vesselType = searchParams.get("vessel") as VesselType;

  return (
    <styled.Container>
      {/* <ChoseVolume
        elevation={24}
        vesselType={vesselType}
        currVolume={currVolume}
        onChangeVolume={setCurrVolume}
      /> */}

      <styled.Footer elevation={24}>
        {/* <ChoseMatherials/> */}
        <Factors />
      </styled.Footer>
    </styled.Container>
  );
};

export default CalculateGravimetricVolume;
