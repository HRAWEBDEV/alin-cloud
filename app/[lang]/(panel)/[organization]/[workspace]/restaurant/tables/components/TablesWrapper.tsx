"use client";
import TablesFilters from "./TablesFilters";
import TablesList from "./TablesList";
import TablesListPaging from "./TablesListPaging";
import { useTablesControlContext } from "../services/control/tablesControlContext";

export default function TablesWrapper() {
  const { contentView } = useTablesControlContext();
  return (
    <div className="w-[min(100%,60rem)] mx-auto grow flex flex-col overflow-hidden">
      <TablesFilters />
      <div className="flex flex-col grow overflow-hidden px-2 pb-1">
        <div
          data-view-mode={contentView}
          className="data-[view-mode='grid']:border border-border rounded-md grow flex flex-col overflow-hidden **:data-[slot='table-container']:grow"
        >
          <TablesList />
          <TablesListPaging />
        </div>
      </div>
    </div>
  );
}
