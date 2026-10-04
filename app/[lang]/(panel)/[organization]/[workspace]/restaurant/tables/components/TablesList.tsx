"use clinet";
import TablesGrid from "./TablesGrid";
import TablesGridView from "./TablesGridView";
import { useTablesControlContext } from "../services/control/tablesControlContext";

export default function TablesList() {
  const { contentView } = useTablesControlContext();
  if (contentView === "grid") {
    return <TablesGrid />;
  } else {
    return <TablesGridView />;
  }
}
