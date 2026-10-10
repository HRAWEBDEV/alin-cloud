"use client";
import { ReactNode, useState, useEffect, useCallback } from "react";
import { type HistoryContextProps, HistoryContext } from "./historyContext";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useGoHome } from "../../hooks/useGoHome";

export default function HistoryProivder({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const { goHome } = useGoHome();
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchParamsString = searchParams.toString();
  const [historyList, setHistoryList] = useState<
    HistoryContextProps["historyList"]
  >([]);

  // on Change path or search params
  const handleChangePath = useCallback(
    (historyItem: Omit<HistoryContextProps["historyList"][number], "id">) => {
      setHistoryList((pre) => {
        const lastItem = pre[pre.length - 1];
        const newItem = { id: lastItem ? lastItem.id + 1 : 1, ...historyItem };
        if (pre.length === 0) {
          return [newItem];
        }
        if (
          pre
            .slice(-3)
            .some(
              (item) =>
                item.path === newItem.path && item.search === newItem.search,
            )
        ) {
          return pre;
        }
        return [...pre, newItem];
      });
    },
    [],
  );

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
  function handleDeleteHistory(id: number) {
    const historyIndex = historyList.findIndex((item) => item.id === id);
    const historyListClone = [...historyList];
    const deletedItem = historyListClone.splice(historyIndex, 1);
    const prevHistoryItem = historyListClone.at(historyIndex - 1);
    const isActivePath = deletedItem[0].path === pathname;
    setHistoryList(historyListClone);
    if (!isActivePath) return;
    if (prevHistoryItem === undefined) {
      goHome();
    } else {
      router.push(`${prevHistoryItem.path}?${prevHistoryItem.search}`);
    }
  }
  // on clear history
  // on comeback
  const canGoBack = historyList.length > 1;

  const ctx: HistoryContextProps = {
    title: "historyContext",
    historyList,
    canGoBack,
    onDeleteHistory: handleDeleteHistory,
    onGoBack: handleGoBack,
  };
  // when path,search changes
  useEffect(() => {
    if (pathname.split("/").length < 3) return;
    handleChangePath({
      path: pathname,
      search: searchParamsString,
    });
  }, [pathname, searchParamsString, handleChangePath]);

  return (
    <HistoryContext.Provider value={ctx}>{children}</HistoryContext.Provider>
  );
}
