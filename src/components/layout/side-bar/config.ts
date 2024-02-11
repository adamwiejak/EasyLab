import { getIcon } from "../../../assets/icons/_icons";

export const sidebarFooterButtons: IListItemButton[] = [
  {
    icon: getIcon("FilesIcon"),
    text: "Rejestr Próbek",
    href: "samples_list",
  },
  { icon: getIcon("UserIcon"), text: "Analitycy", href: "users" },
  { icon: getIcon("SettingsIcon"), text: "Ustawienia", href: "settings" },
];
