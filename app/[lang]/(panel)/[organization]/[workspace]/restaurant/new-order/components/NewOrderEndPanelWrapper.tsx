"use client";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { useNewOrderControlContext } from "../services/control/newOrderControlContext";
import NewOrderShop from "./NewOrderShop";

export default function NewOrderEndPanelWrapper() {
  const { dic, activeEndPanelTab, setActiveEndPanelTab } =
    useNewOrderControlContext();
  return (
    <>
      <Tabs
        className="grow flex flex-col"
        value={activeEndPanelTab}
        onValueChange={setActiveEndPanelTab}
      >
        <TabsList className="w-full sticky top-0">
          <TabsTrigger value="shop">{dic.filters.shop}</TabsTrigger>
          <TabsTrigger value="invoice">{dic.filters.invoice}</TabsTrigger>
        </TabsList>
        <TabsContent value="shop" className="grow flex flex-col">
          <NewOrderShop />
        </TabsContent>
        <TabsContent value="invoice"></TabsContent>
      </Tabs>
    </>
  );
}
