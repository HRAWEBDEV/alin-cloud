"use client";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { useNewOrderControlContext } from "../services/control/newOrderControlContext";
export default function NewOrderStartPanel() {
  const { dic } = useNewOrderControlContext();

  return (
    <div className="border-e border-border p-2 overflow-auto">
      <Tabs>
        <TabsList className="w-full sticky top-0">
          <TabsTrigger value="filters">{dic.filters.filters}</TabsTrigger>
        </TabsList>
        <TabsContent value="filters"></TabsContent>
      </Tabs>
    </div>
  );
}
