export interface NavigationItem {
  name: string;
  path: string;
  items?: NavigationItem[];
}
export const navigationItems: NavigationItem[] = [
  {
    name: "tablesRack",
    path: "",
  },
];
