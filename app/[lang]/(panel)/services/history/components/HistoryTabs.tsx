"use client";
import { Tabs, TabsList } from "@/components/ui/tabs";
import { useHistoryContext } from "../historyContext";
import HistoryTabItem from "./HistoryTabItem";
import { usePathname, useSearchParams } from "next/navigation";
import { useMatchMedia } from "@/hooks/useMatchMedia";
import { BREAK_POINTS } from "@/utils/breakPoints";
import { AnimatePresence } from "framer-motion";
import { DragDropProvider } from "@dnd-kit/react";
import { isSortable } from "@dnd-kit/react/sortable";

export default function HistoryTabs() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchParamsString = searchParams.toString();
  const { historyList, numberOfHistoryTabs, onOrderTab } = useHistoryContext();
  const matched = useMatchMedia({ breakPoint: BREAK_POINTS.lg });
  return (
    <>
      {matched || !historyList.length ? null : (
        <div>
          <Tabs value={`${pathname}?${searchParamsString}`}>
            <TabsList className="rounded-none w-full [&>button]:grow-0 [&>button]:min-w-40 justify-start gap-1">
              <AnimatePresence>
                <DragDropProvider
                  onDragEnd={(e) => {
                    if (e.canceled) return;
                    if (!isSortable(e.operation.source)) return;
                    const { source } = e.operation;
                    if (source.initialIndex === source.index) return;
                    onOrderTab({
                      index: source.index,
                      initialIndex: source.initialIndex,
                    });
                  }}
                >
                  {historyList
                    .slice(-1 * numberOfHistoryTabs)
                    .map((item, i) => (
                      <HistoryTabItem key={item.id} item={item} index={i} />
                    ))}
                </DragDropProvider>
              </AnimatePresence>
            </TabsList>
          </Tabs>
        </div>
      )}
    </>
  );
}
