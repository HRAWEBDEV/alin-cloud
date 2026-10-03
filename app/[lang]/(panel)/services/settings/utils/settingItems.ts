export type SettingItem = (typeof settingItems)[number]["key"];
export const settingItems = [
  {
    key: "userInfo",
  },
  {
    key: "organizationInfo",
  },
  {
    key: "organizationMembers",
  },
  {
    key: "shortcuts",
  },
  {
    key: "userInterface",
  },
  {
    key: "help",
  },
  {
    key: "logout",
  },
] as const;
