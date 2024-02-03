import styled from "./styles";
import { Link, useRouteError } from "react-router-dom";
import ButtonStandard from "../../primitives/Button";
import type { CardProps } from "@mui/material/Card";

const RouteError: React.FC<CardProps> = (props) => {
  const { ...rest } = props;
  const { status, statusText, error } = useRouteError() as any;

  return (
    <styled.CardBox {...rest}>
      <styled.Header>{`Error status #${status} - ${statusText}`}</styled.Header>
      <styled.Paragraph>Somethink went wrong. {error.message}</styled.Paragraph>

      <styled.Actions>
        <Link to=".." relative="route">
          <ButtonStandard variant="outlined" text="Back" />
        </Link>

        <Link to="/">
          <ButtonStandard variant="outlined" text="Home" />
        </Link>
      </styled.Actions>
    </styled.CardBox>
  );
};

export default RouteError;
