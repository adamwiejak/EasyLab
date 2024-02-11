import Settings from "@mui/icons-material/Settings";
import ContentPasteSearch from "@mui/icons-material/ContentPasteSearch";
import Science from "@mui/icons-material/Science";
import Person4 from "@mui/icons-material/Person4";
import MenuTwoTone from "@mui/icons-material/MenuTwoTone";

export type Icon = JSX.Element;
export type IconName = keyof typeof icons;

const icons = {
  FilesIcon: <ContentPasteSearch />,
  SettingsIcon: <Settings />,
  ScienceIcon: <Science />,
  UserIcon: <Person4 />,
  BurgerIcon: <MenuTwoTone />,
  DupaIcon: <MenuTwoTone />,
};

export const getIcon = (name: IconName) => icons[name];
