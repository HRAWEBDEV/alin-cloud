export interface NavigationItem {
  name: string;
  path: string;
  items?: NavigationItem[];
}
export const navigationItems: NavigationItem[] = [
  {
    name: "tablesRack",
    path: "/restaurant/tables-rack",
  },
  {
    name: "capacityAndPricing",
    path: "",
    items: [
      {
        name: "tables",
        path: "/restaurant/tables",
      },
      {
        name: "salons",
        path: "/restaurant/salons",
      },
    ],
  },
  {
    name: "settings",
    path: "",
    items: [],
  },
];
