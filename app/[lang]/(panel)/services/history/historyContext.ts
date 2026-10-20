import { createContext, use } from "react";
import { OutOfContext } from "@/utils/OutOfContext";

interface HistoryContextProps {
  title: "historyContext";
  historyList: {
    id: number;
    path: string;
    search: string;
  }[];
  numberOfHistoryTabs: number;
  onGoBack: () => unknown;
  onGetActiveHistoryItem: () =>
    HistoryContextProps["historyList"][number] | null;
  onDeleteHistory: (id: number) => unknown;
  onOrderTab: (props: { index: number; initialIndex: number }) => unknown;
  canGoBack: boolean;
}

const HistoryContext = createContext<HistoryContextProps | null>(null);

function useHistoryContext() {
  const val = use(HistoryContext);
  if (!val) throw new OutOfContext("historyContext");
  return val;
}

export type { HistoryContextProps };
export { HistoryContext, useHistoryContext };
