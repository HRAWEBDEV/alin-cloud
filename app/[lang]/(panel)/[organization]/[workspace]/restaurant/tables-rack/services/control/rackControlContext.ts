import { OutOfContext } from "@/utils/OutOfContext";
import { use, createContext } from "react";
import { type TablesRackDictionary } from "@/internalization/app/dictionaries/panel/restaurant/tables-rack/dictionary";
import { type RackSettings } from "../../utils/rackSettings";

interface RackControlContextProps {
  title: "rackControlContext";
  dic: TablesRackDictionary;
  rackSettings: RackSettings;
  showDesktopSidebar: boolean;
  showMobileSidebar: boolean;
  onToggleSidebar: () => unknown;
  onChangeRackSettings: <T extends keyof RackSettings>(
    key: T,
    value: RackSettings[T],
  ) => unknown;
}

const RackControlContext = createContext<RackControlContextProps | null>(null);

function useRackControlContext() {
  const val = use(RackControlContext);
  if (!val) throw new OutOfContext("RackControlContext");
  return val;
}

export type { RackControlContextProps };
export { RackControlContext, useRackControlContext };
