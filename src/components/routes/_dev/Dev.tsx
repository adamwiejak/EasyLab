import { Typography } from "@mui/material";
import icons, { IconName } from "../../../assets/icons/_icons";
import IconButton from "../../primitives/IconButton";
import Icon from "../../primitives/Icon";

const DevPage = () => {
  const iconsName = Object.keys(icons) as IconName[];

  return (
    <div>
      <Typography variant="h4">Icons (Hover to get iconName prop)</Typography>
      {iconsName.map((icon) => (
        <IconButton
          key={icon}
          tip={icon}
          size="large"
          icon={<Icon iconName={icon} />}
        />
      ))}
    </div>
  );
};

export default DevPage;
