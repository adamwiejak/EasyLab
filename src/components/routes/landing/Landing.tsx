import styled from "./styled";
import MediaCard from "../../shared/media-card/MediaCard";
import { getImage } from "../../../assets/images/_images";
import { Link, LoaderFunctionArgs } from "react-router-dom";
import Background from "../../shared/background-image/Background";
import { Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export const loader = (props: LoaderFunctionArgs) => {
  return { analysis: props.params.analysis };
};

const AnalysisHome = () => {
  const headerRef = useRef<HTMLElement>(null!);
  const headerRef2 = useRef<HTMLElement>(null!);

  useEffect(() => {
    const children = headerRef.current.children;
    const children2 = headerRef2.current.children;
    gsap.effects.spreadChildren([...children, ...children2], { stagger: 0.2 });
  }, []);

  return (
    <styled.Wrapper>
      <styled.Header ref={headerRef} cellSize="300px">
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

      <Typography sx={{ mt: 5 }} variant="h3">
        OSTATNIO OTWARTE:
      </Typography>

      <styled.Header ref={headerRef2} cellSize="100px">
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
