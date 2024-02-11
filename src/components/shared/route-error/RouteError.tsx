import * as styled from "./styled";
import { Link, useRouteError } from "react-router-dom";
import ButtonStandard from "../../primitives/Button";
import type { CardProps } from "@mui/material/Card";

const RouteError: React.FC<CardProps> = (props) => {
  const { ...rest } = props;
  const { status, statusText, error } = useRouteError() as any;

  return (
    <styled.Container {...rest}>
      <styled.Header variant="h5">{`Error status #${status} - ${statusText}`}</styled.Header>

      <styled.Paragraph>Somethink went wrong :</styled.Paragraph>
      <styled.Paragraph color="error">{error?.message}</styled.Paragraph>

      <styled.Actions>
        <Link to="../">
          <ButtonStandard fullWidth variant="outlined" text="Back" />
        </Link>

        <Link to="/">
          <ButtonStandard fullWidth variant="outlined" text="Home" />
        </Link>
      </styled.Actions>
    </styled.Container>
  );
};

export default RouteError;
