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
        style={{
          height: gridLayoutSettings.layoutSize,
          width: gridLayoutSettings.layoutSize,
        }}
        onClick={() => {
          grid.onChangeSelectedBox(null);
        }}
        ref={contrainerRef}
        className="bg-[repeating-linear-gradient(0deg,transparent,transparent_calc(var(--grid-size)-1px),var(--color-border)_calc(var(--grid-size)-1px),var(--color-border)_var(--grid-size)),repeating-linear-gradient(-90deg,transparent,transparent_calc(var(--grid-size)-1px),var(--color-border)_calc(var(--grid-size)-1px),var(--color-border)_var(--grid-size))] bg-size-[var(--grid-size)_var(--grid-size)] relative"
      >
        <DragDropProvider
          onDragEnd={({ operation }) => {
            if (operation.canceled || !operation.source?.id) return;
            grid.onTransforBox({
              id: operation.source!.id as number,
              x: operation.transform.x,
              y: operation.transform.y,
            });
          }}
        >
          {grid.boxes.map((box) => (
            <DinningTable key={box.id} box={box} />
          ))}
        </DragDropProvider>
      </div>
    </div>
  );
}
