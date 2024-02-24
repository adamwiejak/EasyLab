import { Typography, TypographyProps } from "@mui/material";
import React from "react";

interface IPlacehoolder extends TypographyProps {
  text: string;
}

const PlaceHolder: React.FC<IPlacehoolder> = (props) => {
  const { text, sx, ...rest } = props;

  return (
    <Typography {...rest} sx={{ ...sx, placeSelf: "center" }} variant="h2">
      {text}
    </Typography>
  );
};

export default PlaceHolder;
