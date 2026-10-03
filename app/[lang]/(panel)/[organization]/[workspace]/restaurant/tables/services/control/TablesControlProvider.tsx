"use client";
import { useState } from "react";
import {
  type TablesControlContextProps,
  TablesControlContext,
} from "./tablesControlContext";
import TablesWrapper from "../../components/TablesWrapper";
import { type TablesDictionary } from "@/internalization/app/dictionaries/panel/restaurant/tables/dictionary";
import EditTableDialog from "../../components/new-table/EditTableDialog";
import { useHotkey } from "@tanstack/react-hotkeys";
import { useShortcutsContext } from "@/app/[lang]/(panel)/services/shortcuts/shortcutsContext";

export default function TablesControlProvider({
  dic,
}: {
  dic: TablesDictionary;
}) {
  const { onGetShortcutKeys } = useShortcutsContext();
  const [showEditTable, setShowEditTable] = useState(false);

  function handleToggleEditTable(state: boolean, id: number | null) {
    setShowEditTable(state);
  }

  // shortcuts
  useHotkey(onGetShortcutKeys("general", "addingItem"), () => {
    handleToggleEditTable(true, null);
  });

  const ctx: TablesControlContextProps = {
    title: "tablesControlContext",
    dic,
    editTable: {
      open: showEditTable,
      onToggle: handleToggleEditTable,
    },
  };
  return (
    <TablesControlContext.Provider value={ctx}>
      <TablesWrapper />
      <EditTableDialog
        dic={dic}
        open={showEditTable}
        onToggle={handleToggleEditTable}
      />
    </TablesControlContext.Provider>
  );
}
