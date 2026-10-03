import { use, createContext } from "react";
import { OutOfContext } from "@/utils/OutOfContext";
import { type SettingItem } from "./utils/settingItems";
import { gridRowsCountOptions } from "./utils/gridRowsCountOptions";

const headerBgColors = ["rich", "noColor"] as const;

interface PanelSettings {
  headerBgColor: (typeof headerBgColors)[number];
  gridDefaultRowsCount: number;
}

const defaultPanelSettings: PanelSettings = {
  headerBgColor: "noColor",
  gridDefaultRowsCount: gridRowsCountOptions[1],
};

interface SettingsContextProps {
  open: boolean;
  showConfirmLogout: boolean;
  activeTab: SettingItem;
  toggleOpen: (state?: boolean, tab?: SettingItem) => unknown;
  setShowConfirmlogout: (state: boolean) => unknown;
  panelSettings: PanelSettings;
  handleChangeSettings: <K extends keyof PanelSettings>(
    key: K,
    option: PanelSettings[K],
  ) => unknown;
}

const SettingsContext = createContext<SettingsContextProps | null>(null);

function useSettingsContext() {
  const val = use(SettingsContext);
  if (!val) throw new OutOfContext("settings context");
  return val;
}

export type { SettingsContextProps, PanelSettings };
export {
  SettingsContext,
  useSettingsContext,
  defaultPanelSettings,
  headerBgColors,
};
