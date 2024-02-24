import styled from "./styled";
import MediaCard from "../../shared/media-card/MediaCard";
import { getImage } from "../../../assets/images/_images";
import { Link, LoaderFunctionArgs } from "react-router-dom";
import Background from "../../shared/background-image/Background";
import { Typography } from "@mui/material";

export const loader = (props: LoaderFunctionArgs) => {
  return { analysis: props.params.analysis };
};

const AnalysisHome = () => {
  return (
    <styled.Wrapper>
      <styled.Header cellSize="300px">
        <Link to="samples_list">
          <MediaCard
            header="Rejestr Proóbek"
            imageSrc={getImage("registration")}
          />
        </Link>

        <Link to="notebooks_list">
          <MediaCard
            header="Zeszyty Robocze"
            imageSrc={getImage("work_notebook")}
          />
        </Link>

        <Link to="calculate">
          <MediaCard header="Kalkulatory" imageSrc={getImage("calculate")} />
        </Link>
      </styled.Header>

      <Typography sx={{ mt: 5 }} variant="h4">
        OSTATNIO OTWARTE:
      </Typography>

      <styled.Header>
        <Link to="samples_list">
          <MediaCard
            header="Rejestr Proóbek"
            imageSrc={getImage("registration")}
          />
        </Link>

        <Link to="notebooks_list">
          <MediaCard
            header="Zeszyty Robocze"
            imageSrc={getImage("work_notebook")}
          />
        </Link>

        <Link to="calculate">
          <MediaCard header="Kalkulatory" imageSrc={getImage("calculate")} />
        </Link>
      </styled.Header>

      <Background src={getImage("background")} />
    </styled.Wrapper>
  );
};

export default AnalysisHome;
