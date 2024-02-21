import React from "react";
import Tooltip from "@mui/material/Tooltip";
import MUIIconButton from "@mui/material/IconButton";
import type { IconButtonProps } from "@mui/material";
import type { Icon } from "../../assets/icons/_icons";

interface IIconButton extends IconButtonProps {
  tip?: string;
  icon: Icon;
}

const IconButton: React.FC<IIconButton> = (props) => {
  const { tip, icon, size, ...rest } = props;

  // TODO: icon and button coors/size
  return (
    <Tooltip title={tip} enterDelay={350} enterNextDelay={320} arrow>
      <MUIIconButton {...rest}>{icon}</MUIIconButton>
    </Tooltip>
  );
};

export default IconButton;
