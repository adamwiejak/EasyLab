import { getIcon } from "../assets/icons/_icons";

export const analysisSidebarButtons: IListItemButton[] = [
  {
    icon: getIcon("ScienceIcon"),
    text: "Sprawdzanie Naczyń Miarowych.",
    href: "gravimetric_volume",
  },
  {
    icon: getIcon("ScienceIcon"),
    text: "Sucha Masa.",
    href: "dry_matter",
  },
];
