"use client";
import { useState, useEffect } from "react";
import {
  type TablesControlContextProps,
  TablesControlContext,
} from "./tablesControlContext";
import TablesWrapper from "../../components/TablesWrapper";
import { type TablesDictionary } from "@/internalization/app/dictionaries/panel/restaurant/tables/dictionary";
import EditTableDialog from "../../components/new-table/EditTableDialog";
import { useHotkey } from "@tanstack/react-hotkeys";
import { useShortcutsContext } from "@/app/[lang]/(panel)/services/shortcuts/shortcutsContext";
import { type ContentViewOption } from "../../utils/contentViewOptions";
import { useIsMobile } from "@/hooks/use-mobile";
import { useTablesGrid } from "../../hooks/useTablesGrid";

export default function TablesControlProvider({
  dic,
}: {
  dic: TablesDictionary;
}) {
  const isMatched = useIsMobile();
  const { onGetShortcutKeys } = useShortcutsContext();
  const [showEditTable, setShowEditTable] = useState(false);
  const tablesGrid = useTablesGrid();
  const [activeContentView, setActiveContentView] =
    useState<ContentViewOption>("grid");

  function handleChangeContentView(view: ContentViewOption) {
    setActiveContentView(view);
  }
  function handleToggleEditTable(state: boolean, id: number | null) {
    setShowEditTable(state);
  }
  // tables setup

  // shortcuts
  useHotkey(onGetShortcutKeys("tables", "addingItem"), () => {
    handleToggleEditTable(true, null);
  });

  const ctx: TablesControlContextProps = {
    title: "tablesControlContext",
    dic,
    contentView: activeContentView,
    onChangeContentView: handleChangeContentView,
    tablesGrid,
    editTable: {
      open: showEditTable,
      onToggle: handleToggleEditTable,
    },
  };

  useEffect(() => {
    if (!isMatched) return;
    handleChangeContentView("list");
  }, [isMatched]);

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
