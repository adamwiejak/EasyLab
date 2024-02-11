import styled from "./styled";
import { Avatar, ToolbarProps } from "@mui/material";

interface INavBar extends ToolbarProps {}

const NavBar: React.FC<INavBar> = (props) => {
  const { ...rest } = props;

  return (
    <styled.Wrapper {...rest}>
      <Avatar sx={{ mr: 1 }} />
    </styled.Wrapper>
  );
};

export default NavBar;
