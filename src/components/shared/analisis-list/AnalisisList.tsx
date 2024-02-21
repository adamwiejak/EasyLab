import styled from "./styled";
import NavButton from "../../primitives/NavButton";
import { useParams } from "react-router-dom";
import { analysisListAsset } from "../../../data/analysis/assets";
import SearchBar from "../search-bar/SearchBar";
import { type BoxProps } from "@mui/material";
import Icon from "../../primitives/Icon";

interface IAnalisisList extends BoxProps {}

const AnalisisList: React.FC<IAnalisisList> = (props) => {
  const { ...rest } = props;
  const { analysis: active } = useParams();

  return (
    <styled.Container {...rest}>
      <SearchBar />

      <styled.List>
        {new Array(1)
          .fill(0)
          .map(() =>
            analysisListAsset.map(({ icon, title, name }) => (
              <NavButton
                key={name}
                text={title}
                href={`analysis/${name}`}
                selected={active === name}
                icon={
                  <Icon
                    iconName={icon}
                    color={active === name ? "primary" : "disabled"}
                  />
                }
              />
            ))
          )}
      </styled.List>
    </styled.Container>
  );
};

export default AnalisisList;
