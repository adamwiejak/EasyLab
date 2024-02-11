import styled from "./styled";
import { Outlet } from "react-router-dom";
import AppBar from "../../layout/app-bar/AppBar";
import Background from "../../shared/background-image/Background";
import { background } from "../../../assets/images/_images";
import Sidebar from "../../layout/side-bar/Sidebar";

const Root: React.FC = () => {
  return (
    <styled.Wrapper>
      <styled.Header>
        <AppBar position="static" />
      </styled.Header>

      <styled.Sidebar>
        <Sidebar />{" "}
      </styled.Sidebar>

      <styled.Main>
        <Outlet />
        <Background src={background} />
      </styled.Main>

      {/* <Footer /> */}
    </styled.Wrapper>
  );
};

export default Root;
