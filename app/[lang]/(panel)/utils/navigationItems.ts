export interface NavigationItem {
  name: string;
  path: string;
  items?: NavigationItem[];
}
export const navigationItems: NavigationItem[] = [
  {
    name: "playground",
    path: "/restaurant/playground",
  },
  {
    name: "dinningView",
    path: "/restaurant/dinning-view",
  },
  {
    name: "tablesRack",
    path: "/restaurant/tables-rack",
  },
  {
    name: "newOrder",
    path: "/restaurant/new-order",
  },
  {
    name: "ordersList",
    path: "/restaurant/orders-list",
  },
  {
    name: "capacityAndPricing",
    path: "",
    items: [
      {
        name: "salesMenus",
        path: "/restaurant/sales-menus",
      },
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
