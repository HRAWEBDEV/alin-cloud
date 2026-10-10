"use client";
import { useOrdersControlContext } from "../services/control/ordersControlContext";
import { cn } from "cn";
import OrdersSidebar from "./OrdersSidebar";
import OrdersSidebarDialog from "./OrdersSidebarDialog";
import OrdersActions from "./OrdersActions";
import OrdersListPaging from "./OrdersListPaging";
import OrdersList from "./OrdersList";

export default function OrdersWrapper() {
  const { showDesktopSidebar, showMobileSidebar } = useOrdersControlContext();
  return (
    <div
      data-view-mode={"grid"}
      className={cn(
        "group grow lg:overflow-hidden grid grid-cols-1",
        showDesktopSidebar ? "lg:grid-cols-[14rem_1fr]" : "grid-cols-1",
      )}
    >
      {showDesktopSidebar && <OrdersSidebar />}
      {showMobileSidebar && <OrdersSidebarDialog />}
      <div className="px-2 lg:overflow-auto flex flex-col">
        <OrdersActions />
        <div className="group-data-[view-mode='grid']:border border-border rounded-md grow flex flex-col overflow-hidden **:data-[slot='table-container']:grow rounded-ee-none rounded-es-none border-b-0!">
          <OrdersList />
        </div>
        <OrdersListPaging />
      </div>
    </div>
  );
}
