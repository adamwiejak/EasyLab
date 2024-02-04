import React from "react";
import styles from "./styles.module.scss";
import { Box, Card, Dialog } from "@mui/material";
import ChoseVolume from "../../shared/chose-volume/ChoseVolume";
import Calculator from "../calculator/Calculator";
import { useState } from "react";
import { VesselType } from "../../../types";
import { useNavigate, useSearchParams } from "react-router-dom";
import Factors from "../../shared/factors/Factors";
import { Slide } from "@mui/material";
import type { SlideProps } from "@mui/material";

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
      fullScreen
      open={open}
      onClose={onClose}
      TransitionComponent={SlideTransitionComponent}
    >
      <Card className={styles["container"]}>
        <ChoseVolume
          elevation={24}
          sx={{ gridColumn: "1/-1", zIndex: 10 }}
          vesselType={vesselType}
          currVolume={currVolume}
          onChangeVolume={setCurrVolume}
        />

        <Box className={styles["calculator"]}>
          <Calculator vesselType={vesselType} currVolume={currVolume} />
          <Factors elevation={24} />
        </Box>
      </Card>
    </Dialog>
  );
};

export default Calculate;
