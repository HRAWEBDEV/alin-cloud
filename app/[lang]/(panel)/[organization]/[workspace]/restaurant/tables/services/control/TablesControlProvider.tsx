"use client";
import {
  type TablesControlContextProps,
  TablesControlContext,
} from "./tablesControlContext";
import TablesWrapper from "../../components/TablesWrapper";
import { type TablesDictionary } from "@/internalization/app/dictionaries/panel/restaurant/tables/dictionary";
import EditTableDialog from "../../components/new-table/EditTableDialog";

export default function TablesControlProvider({
  dic,
}: {
  dic: TablesDictionary;
}) {
  const ctx: TablesControlContextProps = {
    title: "tablesControlContext",
    dic,
  };
  return (
    <TablesControlContext.Provider value={ctx}>
      <TablesWrapper />
      <EditTableDialog dic={dic} />
    </TablesControlContext.Provider>
  );
}
