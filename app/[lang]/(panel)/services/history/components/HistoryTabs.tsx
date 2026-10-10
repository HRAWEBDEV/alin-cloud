"use client";
import { Tabs, TabsList } from "@/components/ui/tabs";
import { useIsMobile } from "@/hooks/use-mobile";
import { useHistoryContext } from "../historyContext";
import HistoryTabItem from "./HistoryTabItem";
import { usePathname } from "next/navigation";

export default function HistoryTabs() {
  const pathname = usePathname();
  const { historyList } = useHistoryContext();
  const matched = useIsMobile();
  return (
    <>
      {matched || !historyList.length ? null : (
        <div>
          <Tabs value={pathname}>
            <TabsList className="rounded-none w-full [&>button]:grow-0 [&>button]:min-w-40 justify-start gap-1">
              {historyList.slice(-3).map((item) => (
                <HistoryTabItem key={item.id} item={item} />
              ))}
            </TabsList>
          </Tabs>
        </div>
      )}
    </>
  );
}
