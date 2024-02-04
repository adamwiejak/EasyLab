import styled from "./styles";
import { Link, useRouteError } from "react-router-dom";
import ButtonStandard from "../../primitives/Button";
import type { CardProps } from "@mui/material/Card";

const RouteError: React.FC<CardProps> = (props) => {
  const { ...rest } = props;
  const { status, statusText, error } = useRouteError() as any;

  return (
    <styled.CardBox {...rest}>
      <styled.Header variant="h5">{`Error status #${status} - ${statusText}`}</styled.Header>

      <styled.Paragraph>
        Somethink went wrong :
        <styled.Paragraph color="error">{error?.message}</styled.Paragraph>
      </styled.Paragraph>

      <styled.Actions>
        <Link to="../">
          <ButtonStandard fullWidth variant="outlined" text="Back" />
        </Link>

        <Link to="/">
          <ButtonStandard fullWidth variant="outlined" text="Home" />
        </Link>
      </styled.Actions>
    </styled.CardBox>
  );
};

export default RouteError;
