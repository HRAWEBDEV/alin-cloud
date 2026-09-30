"use client";
import TablesFilters from "./TablesFilters";
import TablesList from "./TablesList";

export default function TablesWrapper() {
  return (
    <div className="w-[min(100%,60rem)] mx-auto">
      <TablesFilters />
      <TablesList />
    </div>
  );
}
