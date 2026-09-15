export interface NavigationItem {
  name: string;
  path: string;
  items?: NavigationItem[];
}
export const navigationItems = [
  {
    name: "reservation",
    path: "",
    items: [
      {
        name: "newReservation",
        path: "",
      },
    ],
  },
  {
    name: "reception",
    path: "",
    items: [{ name: "roomsRack", path: "" }],
  },
  {
    name: "settings",
    path: "",
    items: [{ name: "rooms", path: "" }],
  },
];
