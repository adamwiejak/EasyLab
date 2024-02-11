import styled from "./styled";
import ChoseVolume from "../../../_gravimetric-volume/chose-volume/ChoseVolume";
import Calculator from "../../../_gravimetric-volume/calculator/Calculator";
import { useState } from "react";
import { VesselType } from "../../../../data/gravimetric-volume/types";
import { useSearchParams } from "react-router-dom";
import Factors from "../../../shared/factors/Factors";
import ChoseMatherials from "../../../_gravimetric-volume/chose-material/ChoseMatherial";

const CalculateGravimetricVolume = () => {
  const [searchParams] = useSearchParams();
  const [currVolume, setCurrVolume] = useState<number>();
  const vesselType = searchParams.get("vessel") as VesselType;

  return (
    <styled.Container>
      <ChoseVolume
        elevation={24}
        vesselType={vesselType}
        currVolume={currVolume}
        onChangeVolume={setCurrVolume}
      />

      <Calculator vesselType={vesselType} currVolume={currVolume} />

      <styled.Footer elevation={24}>
        <ChoseMatherials />
        <Factors />
      </styled.Footer>
    </styled.Container>
  );
};

export default CalculateGravimetricVolume;
