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
  {
    name: "capacityAndPricing",
    path: "",
    items: [
      {
        name: "tables",
        path: "/restaurant/tables",
      },
    ],
  },
  {
    name: "settings",
    path: "",
    items: [],
  },
];
