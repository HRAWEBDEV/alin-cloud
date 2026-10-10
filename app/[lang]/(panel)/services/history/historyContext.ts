import { createContext, use } from "react";
import { OutOfContext } from "@/utils/OutOfContext";

interface HistoryContextProps {
  title: "historyContext";
  historyList: {
    id: number;
    path: string;
    search: string;
  }[];
  onGoBack: () => unknown;
  onDeleteHistory: (id: number) => unknown;
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
