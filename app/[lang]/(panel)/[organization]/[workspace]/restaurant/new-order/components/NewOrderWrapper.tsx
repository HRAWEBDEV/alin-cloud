"use client";
import NewOrderStartPanel from "./NewOrderStartPanel";
import NewOrderEndPanel from "./NewOrderEndPanel";
import NewOrderActions from "./NewOrderActions";
import NewOrderItems from "./NewOrderItems";
import { useNewOrderControlContext } from "../services/control/newOrderControlContext";
import { useMatchMedia } from "@/hooks/useMatchMedia";
import { BREAK_POINTS } from "@/utils/breakPoints";
import { cn } from "cn";

export default function NewOrderWrapper() {
  const matchedMd = useMatchMedia({ breakPoint: BREAK_POINTS.md });
  const { showDesktopStartPanel, showDesktopEndPanel } =
    useNewOrderControlContext();
  return (
    <div className="grid grid-cols-1 md:grid-cols-[14rem_1fr_14rem] grow md:overflow-hidden">
      {showDesktopStartPanel && <NewOrderStartPanel />}
      {matchedMd && <NewOrderActions />}
      <div
        className={cn(
          "px-2 overflow-hidden md:col-start-1 md:col-end-4 md:overflow-auto",
          showDesktopStartPanel ? "md:col-start-2" : "",
          showDesktopEndPanel ? "md:col-end-3" : "",
        )}
      >
        {!matchedMd && <NewOrderActions />}
        <NewOrderItems />
      </div>
      {showDesktopEndPanel && <NewOrderEndPanel />}
    </div>
  );
}
