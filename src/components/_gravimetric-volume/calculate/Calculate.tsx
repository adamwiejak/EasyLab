import React from "react";
import styles from "./styles.module.scss";
import { Card, Dialog } from "@mui/material";
import ChoseVolume from "../../shared/chose-volume/ChoseVolume";
import Calculator from "../calculator/Calculator";
import { useState } from "react";
import { VesselType } from "../../../types";
import { useNavigate, useSearchParams } from "react-router-dom";
import Factors from "../../shared/factors/Factors";
import { Slide } from "@mui/material";
import type { SlideProps } from "@mui/material";
import ChoseMatherials from "../chose-material/ChoseMatherial";

const SlideTransitionComponent = React.forwardRef<unknown, SlideProps>(
  (props, ref) => <Slide {...props} ref={ref} direction="up" />
);

const Calculate = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [currVolume, setCurrVolume] = useState<number>();
  const vesselType = searchParams.get("vessel") as VesselType;

  const onClose = () => {
    setOpen(false);
    navigate(-1);
  };

  return (
    <Dialog
      open={open}
      maxWidth={false}
      onClose={onClose}
      TransitionComponent={SlideTransitionComponent}
    >
      <Card className={styles["calculate"]}>
        <ChoseVolume
          elevation={24}
          vesselType={vesselType}
          currVolume={currVolume}
          onChangeVolume={setCurrVolume}
          className={styles["calculate__header"]}
        />

        <Calculator
          vesselType={vesselType}
          currVolume={currVolume}
          className={styles["calculate__main"]}
        />

        <Card elevation={24} className={styles["calculate__footer"]}>
          <Factors />
          <ChoseMatherials />
        </Card>
      </Card>
    </Dialog>
  );
};

export default Calculate;
