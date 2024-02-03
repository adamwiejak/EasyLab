import { Box, Typography } from "@mui/material";
import { Link, Outlet, useParams } from "react-router-dom";
import Button from "../../primitives/Button";

const volumes = [100, 200, 300, 400];

export const Some = () => {
  const param = useParams();
  console.log(param);

  return (
    <Typography variant="h3">
      {param?.vessel} {param?.volume}ml
    </Typography>
  );
};

// chose volume
const Calculator = () => {
  const params = useParams();

  return (
    <>
      <Box>
        {volumes.map((volume) => (
          <Link to={`${volume}`}>
            <Button
              size="large"
              text={volume.toString()}
              variant={
                volume.toString() === params?.volume ? "contained" : "outlined"
              }
              color={
                volume.toString() === params?.volume ? "secondary" : "primary"
              }
            />
          </Link>
        ))}
      </Box>

      <Outlet />
    </>
  );
};

export default Calculator;
