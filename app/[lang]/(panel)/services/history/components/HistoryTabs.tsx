"use client";
import { Tabs, TabsList } from "@/components/ui/tabs";
import { useHistoryContext } from "../historyContext";
import HistoryTabItem from "./HistoryTabItem";
import { usePathname, useSearchParams } from "next/navigation";
import { useMatchMedia } from "@/hooks/useMatchMedia";
import { BREAK_POINTS } from "@/utils/breakPoints";

export default function HistoryTabs() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchParamsString = searchParams.toString();
  const { historyList, numberOfHistoryTabs } = useHistoryContext();
  const matched = useMatchMedia({ breakPoint: BREAK_POINTS.lg });
  return (
    <>
      {matched || !historyList.length ? null : (
        <div>
          <Tabs value={`${pathname}?${searchParamsString}`}>
            <TabsList className="rounded-none w-full [&>button]:grow-0 [&>button]:min-w-40 justify-start gap-1">
              {historyList.slice(-1 * numberOfHistoryTabs).map((item) => (
                <HistoryTabItem key={item.id} item={item} />
              ))}
            </TabsList>
          </Tabs>
        </div>
      )}
    </>
  );
}
