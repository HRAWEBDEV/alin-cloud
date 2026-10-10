"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useOrdersControlContext } from "../services/control/ordersControlContext";

export default function RackSidebarDialog() {
  const { dic, showMobileSidebar, onToggleSidebar } = useOrdersControlContext();
  return (
    <Dialog open={showMobileSidebar} onOpenChange={() => onToggleSidebar()}>
      <DialogContent className="p-0 gap-0 w-[95dvw] h-[90dvh] flex flex-col max-h-180 overflow-hidden">
        <DialogHeader className="border-b border-border p-4">
          <DialogTitle>{dic.filters.filters}</DialogTitle>
          <DialogDescription className="hidden">
            {dic.filters.filters}
          </DialogDescription>
        </DialogHeader>
        <div className="grow overflow-auto p-4"></div>
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
