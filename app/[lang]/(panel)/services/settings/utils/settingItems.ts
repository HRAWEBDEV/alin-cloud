export type SettingItem = (typeof settingItems)[number]["key"];
export const settingItems = [
  {
    key: "userInfo",
  },
  {
    key: "general",
  },
  {
    key: "shortcuts",
  },
  {
    key: "userInterface",
  },
  {
    key: "logout",
  },
] as const;
