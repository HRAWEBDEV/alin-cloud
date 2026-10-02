"use client";
import TablesFilters from "./TablesFilters";
import TablesList from "./TablesList";
import TablesListPaging from "./TablesListPaging";

export default function TablesWrapper() {
  return (
    <div className="w-[min(100%,60rem)] mx-auto grow flex flex-col overflow-hidden">
      <TablesFilters />
      <div className="flex flex-col grow overflow-hidden px-4 pb-1">
        <div className="border border-border rounded-md grow flex flex-col overflow-hidden **:data-[slot='table-container']:grow">
          <TablesList />
          <TablesListPaging />
        </div>
      </div>
    </div>
  );
}
