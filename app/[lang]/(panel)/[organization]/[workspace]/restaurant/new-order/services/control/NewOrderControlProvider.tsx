"use client";
import {
  type NewOrderControlContextProps,
  NewOrderControlContext,
} from "./newOrderControlContext";
import { type NewOrderDictionary } from "@/internalization/app/dictionaries/panel/restaurant/new-order/dictionary";
import NewOrderWrapper from "@/app/[lang]/(panel)/[organization]/[workspace]/restaurant/new-order/components/NewOrderWrapper";

export default function NewOrderControlProvider({
  dic,
}: {
  dic: NewOrderDictionary;
}) {
  const ctx: NewOrderControlContextProps = {
    title: "newOrderControlContext",
    dic,
  };

  return (
    <NewOrderControlContext.Provider value={ctx}>
      <NewOrderWrapper />
    </NewOrderControlContext.Provider>
  );
}
