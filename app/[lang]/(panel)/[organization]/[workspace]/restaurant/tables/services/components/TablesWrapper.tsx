"use client";
import TablesFilters from "./TablesFilters";

export default function TablesWrapper() {
  return (
    <div className="w-[min(100%,50rem)] mx-auto">
      <TablesFilters />
      <div className="h-[3000px]"></div>
    </div>
  );
}
