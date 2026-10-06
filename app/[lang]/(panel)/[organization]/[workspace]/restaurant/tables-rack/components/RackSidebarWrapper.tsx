import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { useRackControlContext } from "../services/control/rackControlContext";
import RackFilters from "./RackFilters";

export default function RackSidebarWrapper() {
  const { dic, rackSettings, onChangeRackSettings } = useRackControlContext();
  return (
    <>
      <Tabs
        value={rackSettings.sidebarTab}
        onValueChange={(value) => onChangeRackSettings("sidebarTab", value)}
      >
        <TabsList className="w-full sticky top-0">
          <TabsTrigger value="filters">{dic.filters.filters}</TabsTrigger>
          <TabsTrigger value="help">{dic.filters.help}</TabsTrigger>
        </TabsList>
        <TabsContent value="filters">
          <RackFilters />
        </TabsContent>
        <TabsContent value="help"></TabsContent>
      </Tabs>
    </>
  );
}
