import styles from "./styles.module.scss";
// import image from "../../../assets/images/404.svg";
import RouteError from "../../shared/route-error/RouteError";
import { no_found } from "../../../assets/images/_images";

const NoPage = () => {
  return (
    <div className={styles["no-page"]}>
      <RouteError sx={{ position: "absolute", zIndex: 2 }} />
      <img src={no_found} />
    </div>
  );
};

export default NoPage;
