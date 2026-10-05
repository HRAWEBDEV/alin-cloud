"use client";
import {
  type RackControlContextProps,
  RackControlContext,
} from "./rackControlContext";
import { type TablesRackDictionary } from "@/internalization/app/dictionaries/panel/restaurant/tables-rack/dictionary";
import RackWrapper from "@/app/[lang]/(panel)/[organization]/[workspace]/restaurant/tables-rack/components/RackWrapper";

export default function RackControlProvider({
  dic,
}: {
  dic: TablesRackDictionary;
}) {
  const ctx: RackControlContextProps = {
    title: "rackControlContext",
    dic,
  };

  return (
    <RackControlContext.Provider value={ctx}>
      <RackWrapper />
    </RackControlContext.Provider>
  );
}
