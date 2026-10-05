"use client";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { useNewOrderControlContext } from "../services/control/newOrderControlContext";

export default function NewOrderEndPanel() {
  const { dic } = useNewOrderControlContext();
  return (
    <div className="border-s border-border p-2 overflow-auto ">
      <Tabs>
        <TabsList className="w-full sticky top-0">
          <TabsTrigger value="shop">{dic.filters.shop}</TabsTrigger>
          <TabsTrigger value="invoice">{dic.filters.invoice}</TabsTrigger>
        </TabsList>
        <TabsContent value="shop"></TabsContent>
        <TabsContent value="invoice"></TabsContent>
      </Tabs>
    </div>
  );
}
