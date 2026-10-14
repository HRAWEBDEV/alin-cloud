"use client";
import TablesFilters from "./TablesFilters";
import TablesList from "./TablesList";
import TablesListPaging from "./TablesListPaging";
import EditTableDialog from "./new-table/EditTableDialog";
import { useTablesControlContext } from "../services/control/tablesControlContext";

export default function TablesWrapper() {
  const { dic, contentView, editTable } = useTablesControlContext();
  return (
    <div
      data-view-mode={contentView}
      className="group w-[min(100%,60rem)] mx-auto grow flex flex-col data-[view-mode='grid']:overflow-hidden"
    >
      <div className="grow grid group-data-[view-mode='grid']:overflow-hidden">
        <div className="flex flex-col grow group-data-[view-mode='grid']:overflow-hidden">
          <TablesFilters />
          <div className="flex flex-col grow group-data-[view-mode='grid']:overflow-hidden px-2 pb-1">
            <div className="group-data-[view-mode='grid']:border border-border rounded-md grow flex flex-col overflow-hidden **:data-[slot='table-container']:grow rounded-ee-none rounded-es-none border-b-0!">
              <TablesList />
            </div>
            <TablesListPaging />
          </div>
        </div>
      </div>
      <EditTableDialog dic={dic} editTable={editTable} />
    </div>
  );
}
