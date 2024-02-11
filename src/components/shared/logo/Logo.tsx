import { Toolbar, ToolbarProps, Typography } from "@mui/material";
import BiotechIcon from "@mui/icons-material/Biotech";
import { Link } from "react-router-dom";

const Logo: React.FC<ToolbarProps> = (props) => {
  return (
    <Toolbar {...props}>
      <BiotechIcon fontSize="large" sx={{ mx: 3 }} />

      <Link to="/">
        <Typography
          variant="h5"
          noWrap
          sx={{
            fontFamily: "monospace",
            fontWeight: 800,
            letterSpacing: ".3rem",
            textDecoration: "none",
          }}
        >
          EASY-LAB
        </Typography>
      </Link>
    </Toolbar>
  );
};

export default Logo;
