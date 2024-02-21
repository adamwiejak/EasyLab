import no_found from "./404-error.jpg";
import back from "./back.png";
import background from "./background.jpg";
import glass_and_plastic from "./glass-and-plastic.jpg";
import liquid_handling from "./liquid-handling.jpeg";
import manual_pipettes from "./manual-pipete.jpg";
import electrical_pipettes from "./electrical-pipette.jpg";
import burettes from "./burettes.jpg";
import portionmeters from "./portionmeters.jpg";
import flasks from "./flasks.jpg";
import cylinders from "./cylinders.jpg";
import glass_pipetes_multi from "./glass-pipete-multi.jpg";
import glass_pipetes_singly from "./glass-pipete-singly.jpg";
import registration from "./registration.jpeg";
import flow_analizer from "./flow-analizer.jpg";
import work_notebook from "./work-notebook.jpg";
import calculate from "./calculate.jpg";

import dry_matter from "./dry-matter.jpg";
import gravimetric_volume from "./gravimetric-volume.jpg";

export type ImageName = keyof typeof images;

const images = {
  no_found,
  back,
  background,
  gravimetric_volume,
  liquid_handling,
  glass_and_plastic,
  flasks,
  cylinders,
  burettes,
  portionmeters,
  glass_pipetes_multi,
  glass_pipetes_singly,
  manual_pipettes,
  electrical_pipettes,
  registration,
  flow_analizer,
  calculate,
  work_notebook,
  dry_matter,
};

export default images;
export const getImage = (key: ImageName) => images[key];
