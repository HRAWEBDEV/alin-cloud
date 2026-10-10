import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { useOrdersControlContext } from "../services/control/ordersControlContext";

export default function RackSidebarWrapper() {
  const { dic } = useOrdersControlContext();
  return (
    <>
      <Tabs value="filters">
        <TabsList className="w-full sticky top-0">
          <TabsTrigger value="filters">{dic.filters.filters}</TabsTrigger>
        </TabsList>
        <TabsContent value="filters"></TabsContent>
      </Tabs>
    </>
  );
}
