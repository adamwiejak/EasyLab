import React from "react";
import { type IconName, getIcon } from "../../assets/icons/_icons";
import { IconProps } from "@mui/material";

interface IIcon extends IconProps {
  iconName: IconName;
}

const Icon: React.FC<IIcon> = (props) => {
  const { iconName, ...rest } = props;

  const I = getIcon(iconName) as any;

  return <I {...rest} />;
};

export default Icon;
