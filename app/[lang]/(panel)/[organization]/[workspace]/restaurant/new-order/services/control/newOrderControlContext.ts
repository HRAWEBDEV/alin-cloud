import { OutOfContext } from "@/utils/OutOfContext";
import { use, createContext } from "react";
import { type NewOrderDictionary } from "@/internalization/app/dictionaries/panel/restaurant/new-order/dictionary";

interface NewOrderControlContextProps {
  title: "newOrderControlContext";
  dic: NewOrderDictionary;
}

const NewOrderControlContext =
  createContext<NewOrderControlContextProps | null>(null);

function useNewOrderControlContext() {
  const val = use(NewOrderControlContext);
  if (!val) throw new OutOfContext("NewOrderControlContext");
  return val;
}

export { type NewOrderControlContextProps };
export { NewOrderControlContext, useNewOrderControlContext };
