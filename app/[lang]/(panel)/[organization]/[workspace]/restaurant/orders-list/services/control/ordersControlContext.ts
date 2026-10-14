import { OutOfContext } from "@/utils/OutOfContext";
import { use, createContext } from "react";
import { type OrdersListDictionary } from "@/internalization/app/dictionaries/panel/restaurant/orders-list/dictionary";
import { useTableGrid } from "../../hooks/useOrdersTableGrid";

interface OrdersControlContextProps {
  title: "ordersControlContext";
  dic: OrdersListDictionary;
  tablesGrid: ReturnType<typeof useTableGrid>;
  showDesktopSidebar: boolean;
  showMobileSidebar: boolean;
  onToggleSidebar: () => unknown;
}

const OrdersControlContext = createContext<OrdersControlContextProps | null>(
  null,
);

function useOrdersControlContext() {
  const val = use(OrdersControlContext);
  if (!val) throw new OutOfContext("OrdersControlContext");
  return val;
}

export type { OrdersControlContextProps };
export { OrdersControlContext, useOrdersControlContext };
