import { OutOfContext } from "@/utils/OutOfContext";
import { use, createContext } from "react";

interface OrdersControlContextProps {
  title: "ordersControlContext";
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
