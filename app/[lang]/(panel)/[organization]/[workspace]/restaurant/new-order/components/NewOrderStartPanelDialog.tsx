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
import NewOrderStartPanelWrapper from "./NewOrderStartPanelWrapper";

export default function NewOrderStartPanelDialog() {
  const { dic, showMobileStartPanel, onToggleStartPanel } =
    useNewOrderControlContext();
  return (
    <Dialog
      open={showMobileStartPanel}
      onOpenChange={() => onToggleStartPanel()}
    >
      <DialogContent className="p-0 gap-0 w-[95dvw] h-[90dvh] flex flex-col max-h-180 overflow-hidden">
        <DialogHeader className="border-b border-border p-4">
          <DialogTitle>{dic.filters.userOrderInfo}</DialogTitle>
          <DialogDescription className="hidden">
            {dic.filters.userOrderInfo}
          </DialogDescription>
        </DialogHeader>
        <div className="grow overflow-auto p-4">
          <NewOrderStartPanelWrapper />
        </div>
        <DialogFooter>
          <Button
            variant="outline"
            className="rounded-none w-full"
            onClick={() => onToggleStartPanel()}
          >
            {dic.filters.close}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
