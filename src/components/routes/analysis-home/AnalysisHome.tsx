import styled from "./styled";
import { getImage } from "../../../assets/images/_images";
import { LoaderFunctionArgs, Outlet } from "react-router-dom";
import Background from "../../shared/background-image/Background";

import { Box, Tab, Tabs } from "@mui/material";

export const loader = (props: LoaderFunctionArgs) => {
  return { analysis: props.params.analysis };
};

const AnalysisHome = () => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <styled.Wrapper>
      <styled.Header>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value="calculate" aria-label="basic tabs example">
            <Tab
              value="calculate"
              label="Kalkulatory"
              onChange={handleChange}
            />

            <Tab
              value="notebooks"
              label="Zeszyty Robocze"
              onChange={handleChange}
            />
          </Tabs>
        </Box>
      </styled.Header>

      <Outlet />

      <Background src={getImage("background")} />
    </styled.Wrapper>
  );
};

export default AnalysisHome;
