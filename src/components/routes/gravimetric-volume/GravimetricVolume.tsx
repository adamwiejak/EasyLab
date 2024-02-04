import ImageButton from "../../primitives/ImageButton";
import { vesselsTypeAsset } from "../../../assets/gravimetic-volume";
import GridContainer from "../../layout/grid-container/GridContainer";
import { Link, Outlet, useOutlet } from "react-router-dom";

const GravimetricVolume = () => {
  const outlet = useOutlet();

  return (
    <>
      {!outlet && (
        <GridContainer backBtn={{ text: "Cofnij Do Listy Badań" }}>
          {vesselsTypeAsset.map(({ header, text, href, imageSrc }) => (
            <Link to={href} key={header}>
              <ImageButton
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
