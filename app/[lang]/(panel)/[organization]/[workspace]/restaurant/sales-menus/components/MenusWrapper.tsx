"use client";
import { useMenusControlContext } from "../services/control/menusControlContext";
import MenusFilters from "./MenusFilters";

export default function MenusWrapper() {
  const { contentView } = useMenusControlContext();
  return (
    <div
      data-view-mode={contentView}
      className="group w-[min(100%,60rem)] mx-auto grow flex flex-col data-[view-mode='grid']:overflow-hidden"
    >
      <MenusFilters />
      <div className="flex flex-col grow group-data-[view-mode='grid']:overflow-hidden px-2 pb-1">
        <div className="group-data-[view-mode='grid']:border border-border rounded-md grow flex flex-col overflow-hidden **:data-[slot='table-container']:grow rounded-ee-none rounded-es-none border-b-0!"></div>
      </div>
    </div>
  );
}
