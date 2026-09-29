"use client";
import { ReactNode } from "react";
import { type HistoryContextProps, HistoryContext } from "./historyContext";

export default function HistoryProivder({ children }: { children: ReactNode }) {
  const ctx: HistoryContextProps = {
    title: "historyContext",
  };
  return (
    <HistoryContext.Provider value={ctx}>{children}</HistoryContext.Provider>
  );
}
