"use client";
import { ReactNode, useState, useEffect } from "react";
import { type HistoryContextProps, HistoryContext } from "./historyContext";
import { usePathname, useSearchParams } from "next/navigation";

export default function HistoryProivder({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [historyList, setHistoryList] = useState<
    HistoryContextProps["historyList"]
  >([]);

  // on Change path or search params
  // on delete history
  // on clear history
  // on comeback

  const ctx: HistoryContextProps = {
    title: "historyContext",
    historyList,
  };
  // when path,search changes
  useEffect(() => {
    console.log(pathname, searchParams.toString());
  }, [pathname, searchParams]);
  return (
    <HistoryContext.Provider value={ctx}>{children}</HistoryContext.Provider>
  );
}
