import { Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Toolbar>
      <Link to="/">
        <Typography>LOGO</Typography>
      </Link>
    </Toolbar>
  );
};

export default Logo;
