import GridContainer from "../../layout/grid-container/GridContainer";
import { Link, Outlet, useOutlet } from "react-router-dom";
import { vesselsTypesAsset } from "./config";
import MediaCard from "../../shared/media-card/MediaCard";
import BackMediaCard from "../../primitives/BackMediaCard";

const GravimetricVolume = () => {
  const outlet = useOutlet();

  return (
    <>
      {!outlet && (
        <GridContainer>
          <BackMediaCard text="Wróć Do Aktulalności" height={250} />

          {vesselsTypesAsset.map(({ header, text, href, imageSrc }) => (
            <Link to={href} key={header}>
              <MediaCard
                height={250}
                text={text}
                header={header}
                imageSrc={imageSrc}
              />
            </Link>
          ))}
        </GridContainer>
      )}

      <Outlet />
    </>
  );
};

export default GravimetricVolume;
