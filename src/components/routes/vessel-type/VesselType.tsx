import { LoaderFunction, Outlet, useLoaderData } from "react-router-dom";
import LiquidHandling from "../../_gravimetric-volume/liquid-handling/LiquidHandling";
import GlassAndPlastic from "../../_gravimetric-volume/glass-and-plastic/GlassAndPlastic";

export const loader: LoaderFunction = ({ params }) => {
  const type = params.vessel_type;

  let content;
  if (type === "liquid_handling") content = <LiquidHandling />;
  if (type === "glass_and_plastic") content = <GlassAndPlastic />;

  return { content };
};

const VesselType = () => {
  const data = useLoaderData() as any;

  return (
    <>
      {data?.content}
      <Outlet />z
    </>
  );
};

export default VesselType;
