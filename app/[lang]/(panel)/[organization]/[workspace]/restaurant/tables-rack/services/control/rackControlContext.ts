import { OutOfContext } from "@/utils/OutOfContext";
import { use, createContext } from "react";
import { type TablesRackDictionary } from "@/internalization/app/dictionaries/panel/restaurant/tables-rack/dictionary";

interface RackControlContextProps {
  title: "rackControlContext";
  dic: TablesRackDictionary;
}

const RackControlContext = createContext<RackControlContextProps | null>(null);

function useRackControlContext() {
  const val = use(RackControlContext);
  if (!val) throw new OutOfContext("RackControlContext");
  return val;
}

export type { RackControlContextProps };
export { RackControlContext, useRackControlContext };
