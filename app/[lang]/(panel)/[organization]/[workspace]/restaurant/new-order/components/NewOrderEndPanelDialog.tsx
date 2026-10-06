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
import { useNewOrderControlContext } from "../services/control/newOrderControlContext";
import NewOrderEndPanelWrapper from "./NewOrderEndPanelWrapper";

export default function NewOrderEndPanelDialog() {
  const { dic, showMobileEndPanel, onToggleEndPanel } =
    useNewOrderControlContext();
  return (
    <Dialog open={showMobileEndPanel} onOpenChange={() => onToggleEndPanel()}>
      <DialogContent className="p-0 gap-0 w-[95dvw] h-[90dvh] flex flex-col max-h-180 overflow-hidden">
        <DialogHeader className="border-b border-border p-4">
          <DialogTitle>{dic.filters.userOrderInfo}</DialogTitle>
          <DialogDescription className="hidden">
            {dic.filters.userOrderInfo}
          </DialogDescription>
        </DialogHeader>
        <div className="grow overflow-auto p-4">
          <NewOrderEndPanelWrapper />
        </div>
        <DialogFooter>
          <Button
            variant="outline"
            className="rounded-none w-full"
            onClick={() => onToggleEndPanel()}
          >
            {dic.filters.close}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
