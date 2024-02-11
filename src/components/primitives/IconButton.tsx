import IconButtonMUI, { type IconButtonProps } from "@mui/material/IconButton";
import React from "react";
import { IconName, getIcon } from "../../assets/icons/_icons";

interface IIconButton extends IconButtonProps {
  iconName: IconName;
}

const IconButton: React.FC<IIconButton> = (props) => {
  const { iconName, ...rest } = props;

  return <IconButtonMUI {...rest}>{getIcon(iconName)}</IconButtonMUI>;
};

export default IconButton;
