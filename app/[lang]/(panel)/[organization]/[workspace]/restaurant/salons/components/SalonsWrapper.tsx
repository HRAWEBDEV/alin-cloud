"use client";
import SalonsFilters from "./SalonsFilters";
import SalonsList from "./SalonsList";

export default function SalonsWrapper() {
  return (
    <div className="w-[min(100%,40rem)] mx-auto grow flex flex-col overflow-hidden">
      <SalonsFilters />
      <div className="flex flex-col grow overflow-hidden px-4 pb-1">
        <div
          data-view-mode="list"
          className="data-[view-mode='grid']:border border-border rounded-md grow flex flex-col overflow-hidden **:data-[slot='table-container']:grow"
        >
          <SalonsList />
        </div>
      </div>
    </div>
  );
}
