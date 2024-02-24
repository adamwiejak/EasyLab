import styled from "./styled";
import NavButton from "../../primitives/NavButton";
import { useParams } from "react-router-dom";
import { analysisAssets } from "../../../assets/components/analysis-components";
import SearchBar from "../search-bar/SearchBar";
import { type BoxProps } from "@mui/material";
import Icon from "../../primitives/Icon";

interface IAnalisisList extends BoxProps {}

const AnalisisList: React.FC<IAnalisisList> = (props) => {
  const { ...rest } = props;
  const { analysis } = useParams();

  return (
    <styled.Container {...rest}>
      <SearchBar />

      <styled.List>
        {Object.entries(analysisAssets).map(([key, { navBtn }]) => (
          <NavButton
            key={key}
            text={navBtn.title}
            href={`analysis_list/${key}`}
            selected={analysis === key}
            icon={
              <Icon
                iconName={navBtn.icon}
                color={analysis === key ? "primary" : "disabled"}
              />
            }
          />
        ))}
      </styled.List>
    </styled.Container>
  );
};

export default AnalisisList;
