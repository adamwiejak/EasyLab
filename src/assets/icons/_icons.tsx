import Settings from "@mui/icons-material/SettingsTwoTone";
import ContentPasteSearch from "@mui/icons-material/ContentPasteSearchTwoTone";
import Science from "@mui/icons-material/ScienceTwoTone";
import Person4 from "@mui/icons-material/Person4TwoTone";
import MenuTwoTone from "@mui/icons-material/MenuTwoTone";
import AdminPanelSettings from "@mui/icons-material/AdminPanelSettingsTwoTone";
import NootebookIcon from "@mui/icons-material/DescriptionTwoTone";
import CalculateIcon from "@mui/icons-material/CalculateTwoTone";
import ArrowBackIcon from "@mui/icons-material/ReplyAllTwoTone";
import SearchIcon from "@mui/icons-material/SearchTwoTone";
import HomeIcon from "@mui/icons-material/HomeTwoTone";
import InsertDriveFileTwoToneIcon from "@mui/icons-material/InsertDriveFileTwoTone";
import FolderCopyIcon from "@mui/icons-material/FolderCopyTwoTone";

export type Icon = JSX.Element;
export type IconName = keyof typeof icons;

const icons = {
  home: HomeIcon,
  file: InsertDriveFileTwoToneIcon,
  searchFiles: ContentPasteSearch,
  settings: Settings,
  science: Science,
  user: Person4,
  burger: MenuTwoTone,
  adminPanel: AdminPanelSettings,
  nootebook: NootebookIcon,
  calculate: CalculateIcon,
  arrowBack: ArrowBackIcon,
  search: SearchIcon,
  folder: FolderCopyIcon,
};

export const getIcon = (name: IconName) => icons[name];

export default icons;
