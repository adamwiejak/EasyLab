import styled from "./styled";
import IconButton from "../../primitives/IconButton";
import TextField from "@mui/material/TextField";
import Icon from "../../primitives/Icon";

const SearchBar = () => {
  return (
    <styled.Container variant="outlined">
      <TextField variant="outlined" fullWidth size="small" />
      <IconButton icon={<Icon iconName="search" color="secondary" />} />
    </styled.Container>
  );
};

export default SearchBar;
