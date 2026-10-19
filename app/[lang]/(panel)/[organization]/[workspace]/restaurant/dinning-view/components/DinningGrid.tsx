"use client";
import { useRef, CSSProperties } from "react";
import { DragDropProvider } from "@dnd-kit/react";
import DinningTable from "./DinningTable";
import { useDinningControlContext } from "../services/control/dinningControlContext";

export default function DinningGrid() {
  const { gridLayoutSettings, grid } = useDinningControlContext();
  const contrainerRef = useRef<HTMLDivElement>(null);
  return (
    <div
      style={
        {
          direction: "ltr",
          "--grid-size": `${gridLayoutSettings.gridSize}px`,
        } as CSSProperties
      }
      className="grow overflow-auto"
    >
      <div
        ref={contrainerRef}
        className="bg-[repeating-linear-gradient(0deg,transparent,transparent_calc(var(--grid-size)-1px),#ddd_calc(var(--grid-size)-1px),#ddd_var(--grid-size)),repeating-linear-gradient(-90deg,transparent,transparent_calc(var(--grid-size)-1px),#ddd_calc(var(--grid-size)-1px),#ddd_var(--grid-size))] bg-size-[var(--grid-size)_var(--grid-size)] size-[3000px]"
      >
        <DragDropProvider>
          {grid.boxes.map((box) => (
            <DinningTable key={box.id} box={box} />
          ))}
        </DragDropProvider>
      </div>
    </div>
  );
}
