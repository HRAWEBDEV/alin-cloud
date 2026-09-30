"use client";
import {
  type TablesControlContextProps,
  TablesControlContext,
} from "./tablesControlContext";
import TablesWrapper from "../components/TablesWrapper";
import { type TablesDictionary } from "@/internalization/app/dictionaries/panel/restaurant/tables/dictionary";

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
    </TablesControlContext.Provider>
  );
}
