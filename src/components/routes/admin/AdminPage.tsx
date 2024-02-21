import { LoaderFunctionArgs } from "react-router-dom";
import styled from "./styled";
import { Typography } from "@mui/material";

export const loader = (args: LoaderFunctionArgs) => {
  console.log(args);
  throw new Error("Fake Error in AdminPage Loader");
};

const AdminPage = () => {
  return (
    <styled.Container>
      <Typography variant="h2">AdminPage</Typography>
    </styled.Container>
  );
};

export default AdminPage;
