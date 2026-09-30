import { use, createContext } from "react";
import { OutOfContext } from "@/utils/OutOfContext";
import { type TablesDictionary } from "@/internalization/app/dictionaries/panel/restaurant/tables/dictionary";

interface TablesControlContextProps {
  title: "tablesControlContext";
  dic: TablesDictionary;
}

const TablesControlContext = createContext<TablesControlContextProps | null>(
  null,
);

function useTablesControlContext() {
  const val = use(TablesControlContext);
  if (!val) throw new OutOfContext("tablesControlContext");
  return val;
}

export type { TablesControlContextProps };
export { TablesControlContext, useTablesControlContext };
