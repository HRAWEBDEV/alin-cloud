"use client";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { useNewOrderControlContext } from "../services/control/newOrderControlContext";
export default function NewOrderStartPanelWrapper() {
  const { dic } = useNewOrderControlContext();

  return (
    <>
      <Tabs>
        <TabsList className="w-full sticky top-0">
          <TabsTrigger value="filters">{dic.filters.userOrderInfo}</TabsTrigger>
        </TabsList>
        <TabsContent value="filters"></TabsContent>
      </Tabs>
    </>
  );
}
