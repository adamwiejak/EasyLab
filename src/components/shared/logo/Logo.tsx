import styled from "./styled";
import { BoxProps, Typography } from "@mui/material";
import BiotechIcon from "@mui/icons-material/Biotech";
import { Link } from "react-router-dom";

interface ILogo extends BoxProps {}

const Logo: React.FC<ILogo> = (props) => {
  return (
    <styled.Wrapper {...props}>
      <BiotechIcon fontSize="large" sx={{ mx: 3 }} />

      <Link to="/home">
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
    </styled.Wrapper>
  );
};

export default Logo;
