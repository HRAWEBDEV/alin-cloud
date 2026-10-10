"use client";
import { type OrdersListDictionary } from "@/internalization/app/dictionaries/panel/restaurant/orders-list/dictionary";
import {
  type OrdersControlContextProps,
  OrdersControlContext,
} from "./ordersControlContext";
import OrdersWrapper from "../../components/OrdersWrapper";

export default function OrdersControlProvider({
  dic,
}: {
  dic: OrdersListDictionary;
}) {
  const ctx: OrdersControlContextProps = {
    title: "ordersControlContext",
  };

  return (
    <OrdersControlContext.Provider value={ctx}>
      <OrdersWrapper dic={dic} />
    </OrdersControlContext.Provider>
  );
}
