import { use, createContext } from "react";
import { OutOfContext } from "@/utils/OutOfContext";
import { type SettingItem } from "./utils/settingItems";

interface SettingsContextProps {
  open: boolean;
  showConfirmLogout: boolean;
  activeTab: SettingItem;
  toggleOpen: (state?: boolean, tab?: SettingItem) => unknown;
  setShowConfirmlogout: (state: boolean) => unknown;
}

const SettingsContext = createContext<SettingsContextProps | null>(null);

function useSettingsContext() {
  const val = use(SettingsContext);
  if (!val) throw new OutOfContext("settings context");
  return val;
}

export type { SettingsContextProps };
export { SettingsContext, useSettingsContext };
