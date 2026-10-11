import { useCallback } from "react";
import { type HistoryContextProps } from "../historyContext";
import { usePathname, useSearchParams } from "next/navigation";

export function useIsHistoryActivePath() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const check = useCallback(
    (historyItem: HistoryContextProps["historyList"][number]) => {
      const searchParamsString = searchParams.toString();
      return (
        `${historyItem.path}?${historyItem.search}` ===
        `${pathname}?${searchParamsString}`
      );
    },
    [pathname, searchParams],
  );
  return check;
}
