import { use, createContext } from "react";
import { OutOfContext } from "@/utils/OutOfContext";
import { type TablesDictionary } from "@/internalization/app/dictionaries/panel/restaurant/tables/dictionary";
import { type ContentViewOption } from "../../utils/contentViewOptions";

interface TablesControlContextProps {
  title: "tablesControlContext";
  dic: TablesDictionary;
  contentView: ContentViewOption;
  onChangeContentView(view: ContentViewOption): unknown;
  editTable: {
    open: boolean;
    onToggle(state: boolean, id: number | null): unknown;
  };
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
