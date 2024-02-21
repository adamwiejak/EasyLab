import styled from "./styled";
import { Outlet } from "react-router-dom";
import AppBar from "../../layout/app-bar/AppBar";
import Sidebar from "../../layout/side-bar/Sidebar";

const Root: React.FC = () => {
  return (
    <styled.Wrapper>
      <styled.Header>
        <AppBar position="static" />
      </styled.Header>

      <styled.Sidebar>
        <Sidebar />
      </styled.Sidebar>

      <styled.Main>
        <Outlet />
      </styled.Main>
    </styled.Wrapper>
  );
};

export default Root;
