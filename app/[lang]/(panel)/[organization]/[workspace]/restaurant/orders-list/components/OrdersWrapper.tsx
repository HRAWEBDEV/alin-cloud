"use client";
import { type OrdersListDictionary } from "@/internalization/app/dictionaries/panel/restaurant/orders-list/dictionary";
import { useOrdersControlContext } from "../services/control/ordersControlContext";
import { cn } from "cn";
import OrdersSidebar from "./OrdersSidebar";
import OrdersSidebarDialog from "./OrdersSidebarDialog";
import OrdersActions from "./OrdersActions";

export default function OrdersWrapper() {
  const { dic, showDesktopSidebar, showMobileSidebar } =
    useOrdersControlContext();
  return (
    <div
      className={cn(
        "grow lg:overflow-hidden grid grid-cols-1",
        showDesktopSidebar ? "lg:grid-cols-[14rem_1fr]" : "grid-cols-1",
      )}
    >
      {showDesktopSidebar && <OrdersSidebar />}
      {showMobileSidebar && <OrdersSidebarDialog />}
      <div className="px-2 lg:overflow-auto">
        <OrdersActions />
        <div></div>
      </div>
    </div>
  );
}
