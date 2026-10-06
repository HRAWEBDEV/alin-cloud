"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import RackSidebarWrapper from "./RackSidebarWrapper";
import { useRackControlContext } from "../services/control/rackControlContext";
import { Button } from "@/components/ui/button";

export default function RackSidebarDialog() {
  const { dic, showMobileSidebar, onToggleSidebar, rackSettings } =
    useRackControlContext();
  return (
    <Dialog open={showMobileSidebar} onOpenChange={() => onToggleSidebar()}>
      <DialogContent className="p-0 gap-0 w-[95dvw] h-[90dvh] flex flex-col max-h-180 overflow-hidden">
        <DialogHeader className="border-b border-border p-4">
          <DialogTitle>{dic.filters[rackSettings.sidebarTab]}</DialogTitle>
          <DialogDescription className="hidden">
            {dic.filters[rackSettings.sidebarTab]}
          </DialogDescription>
        </DialogHeader>
        <div className="grow overflow-auto p-4">
          <RackSidebarWrapper />
        </div>
        <DialogFooter>
          <Button
            variant="outline"
            className="rounded-none w-full"
            onClick={() => onToggleSidebar()}
          >
            {dic.filters.close}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
