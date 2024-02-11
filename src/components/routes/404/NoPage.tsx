import * as styled from "./styled";
import RouteError from "../../shared/route-error/RouteError";
import { no_found } from "../../../assets/images/_images";
import Background from "../../shared/background-image/Background";

const NoPage = () => {
  return (
    <styled.Page>
      <RouteError sx={{ position: "absolute", zIndex: 2 }} />
      <Background src={no_found} />
    </styled.Page>
  );
};

export default NoPage;
