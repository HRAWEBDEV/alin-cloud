"use client";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LiaTimesSolid } from "react-icons/lia";
import { useIsMobile } from "@/hooks/use-mobile";

const historyTest = [
  {
    type: "tables",
    title: "میزها",
  },
];

export default function HistoryTabs() {
  const [activeTab, setActiveTab] = useState<string>("registration");
  const matched = useIsMobile();
  return (
    <>
      {matched ? null : (
        <div>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="rounded-none w-full [&>button]:grow-0 [&>button]:min-w-40 justify-start gap-1">
              {historyTest.map((item) => (
                <TabsTrigger
                  key={item.type}
                  value={item.type}
                  className="text-start justify-start bg-neutral-200 dark:bg-neutral-900 cursor-pointer font-normal"
                >
                  <div className="grow truncate">{item.title}</div>
                  <div className="p-1">
                    <LiaTimesSolid className="text-destructive/50" />
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      )}
    </>
  );
}
