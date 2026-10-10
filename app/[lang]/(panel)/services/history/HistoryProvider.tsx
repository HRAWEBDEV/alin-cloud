"use client";
import { ReactNode, useState, useEffect } from "react";
import { type HistoryContextProps, HistoryContext } from "./historyContext";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function HistoryProivder({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchParamsString = searchParams.toString();
  const [historyList, setHistoryList] = useState<
    HistoryContextProps["historyList"]
  >([]);

  // on Change path or search params
  function handleChangePath(
    historyItem: HistoryContextProps["historyList"][number],
  ) {
    setHistoryList((pre) => {
      if (pre.length === 0) return [historyItem];
      if (pre[pre.length - 1].path === historyItem.path) {
        return [...pre.slice(0, -1), historyItem];
      }
      return [...pre, historyItem];
    });
  }
  function handleGoBack() {
    if (historyList.length > 1) {
      const lastItem = historyList.at(-2);
      if (lastItem === undefined) return;
      router.push(`${lastItem.path}?${lastItem.search}`);
    }
    setHistoryList((pre) => {
      if (historyList.length === 0) return pre;
      return [...pre.slice(0, -1)];
    });
  }
  // on delete history
  // on clear history
  // on comeback
  const canGoBack = historyList.length > 1;

  const ctx: HistoryContextProps = {
    title: "historyContext",
    historyList,
    canGoBack,
    onGoBack: handleGoBack,
  };
  // when path,search changes
  useEffect(() => {
    handleChangePath({
      path: pathname,
      search: searchParamsString,
    });
  }, [pathname, searchParamsString]);

  return (
    <HistoryContext.Provider value={ctx}>{children}</HistoryContext.Provider>
  );
}
