"use client";
import { type OrdersListDictionary } from "@/internalization/app/dictionaries/panel/restaurant/orders-list/dictionary";
import {
  type OrdersControlContextProps,
  OrdersControlContext,
} from "./ordersControlContext";
import OrdersWrapper from "../../components/OrdersWrapper";
import { useMatchMedia } from "@/hooks/useMatchMedia";
import { BREAK_POINTS } from "@/utils/breakPoints";
import { useEffect, useState } from "react";
import { useTablesGrid } from "../../hooks/useTablesGrid";

export default function OrdersControlProvider({
  dic,
}: {
  dic: OrdersListDictionary;
}) {
  const tablesGrid = useTablesGrid();
  const isMobile = useMatchMedia({ breakPoint: BREAK_POINTS.lg });
  const [showSidebar, setShowSidebar] = useState(false);

  const showDesktopSidebar = showSidebar && !isMobile;
  const showMobileSidebar = showSidebar && isMobile;

  function handleToggleSidebar() {
    setShowSidebar((pre) => !pre);
  }

  const ctx: OrdersControlContextProps = {
    title: "ordersControlContext",
    dic,
    showDesktopSidebar,
    showMobileSidebar,
    tablesGrid,
    onToggleSidebar: handleToggleSidebar,
  };

  useEffect(() => {
    if (isMobile) {
      setShowSidebar(false);
    } else {
      setShowSidebar(true);
    }
  }, [isMobile]);

  return (
    <OrdersControlContext.Provider value={ctx}>
      <OrdersWrapper />
    </OrdersControlContext.Provider>
  );
}
