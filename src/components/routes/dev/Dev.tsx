import { Tooltip, Typography } from "@mui/material";
import icons, { IconName } from "../../../assets/icons/_icons";
import IconButton from "../../primitives/IconButton";

const DevPage = () => {
  const iconsName = Object.keys(icons) as IconName[];

  return (
    <div>
      <Typography variant="h4">Icons (Hover to get iconName prop)</Typography>
      {iconsName.map((icon) => (
        <Tooltip title={icon} key={icon}>
          <span>
            <IconButton size="large" iconName={icon} />
          </span>
        </Tooltip>
      ))}
    </div>
  );
};

export default DevPage;
