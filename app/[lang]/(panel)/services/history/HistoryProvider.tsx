"use client";
import { ReactNode, useState, useEffect, useCallback } from "react";
import { type HistoryContextProps, HistoryContext } from "./historyContext";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useGoHome } from "../../hooks/useGoHome";
import { useIsHistoryActivePath } from "./utils/useIsHistoryActivePath";

const numberOfHistoryTabs = 4;
export default function HistoryProivder({ children }: { children: ReactNode }) {
  const checkIsActivePath = useIsHistoryActivePath();
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
        if (pre.length === 0) {
          return [
            {
              id: 1,
              ...historyItem,
            },
          ];
        }
        if (
          pre.some(
            (item) =>
              item.path === historyItem.path &&
              item.search === historyItem.search,
          )
        ) {
          return pre;
        }
        const newHistoryList = pre.slice(-(numberOfHistoryTabs - 1));
        return [
          ...newHistoryList,
          {
            id: Date.now(),
            ...historyItem,
          },
        ];
      });
    },
    [],
  );
  // order tab
  function handleOrderTab({
    index,
    initialIndex,
  }: {
    index: number;
    initialIndex: number;
  }) {
    const cloneHistoryList = [...historyList];
    const historyItem = cloneHistoryList.splice(initialIndex, 1);
    cloneHistoryList.splice(index, 0, historyItem[0]);
    setHistoryList(cloneHistoryList);
  }

  function handleGoBack() {
    if (historyList.length > 1) {
      const activePathIndex = historyList.findIndex(checkIsActivePath);
      const prevHistoryItem = historyList.at(activePathIndex - 1);
      if (prevHistoryItem === undefined) return;
      router.push(`${prevHistoryItem.path}?${prevHistoryItem.search}`);
      setHistoryList((pre) => {
        if (historyList.length === 0) return pre;
        const cloneHistoryList = [...pre];
        cloneHistoryList.splice(activePathIndex, 1);
        return [...cloneHistoryList];
      });
    }
  }
  // on delete history
  function handleDeleteHistory(id: number) {
    const historyIndex = historyList.findIndex((item) => item.id === id);
    const historyListClone = [...historyList];
    const deletedItem = historyListClone.splice(historyIndex, 1);
    const prevHistoryItem = historyListClone.at(historyIndex - 1);
    const isActivePath =
      deletedItem[0]?.path === pathname &&
      deletedItem[0]?.search === searchParamsString;
    setHistoryList(historyListClone);
    if (!isActivePath) return;
    if (prevHistoryItem === undefined) {
      goHome();
    } else {
      router.push(`${prevHistoryItem.path}?${prevHistoryItem.search}`);
    }
  }
  function handleGetActiveHistoryItem() {
    return historyList.find(checkIsActivePath) || null;
  }
  const activeHistoryItem = handleGetActiveHistoryItem();
  // on clear history
  // on comeback
  const canGoBack = historyList.length > 1;

  const ctx: HistoryContextProps = {
    title: "historyContext",
    historyList,
    canGoBack,
    numberOfHistoryTabs,
    onDeleteHistory: handleDeleteHistory,
    onGetActiveHistoryItem: handleGetActiveHistoryItem,
    onGoBack: handleGoBack,
    onOrderTab: handleOrderTab,
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
