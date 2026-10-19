"use client";
import { Button } from "@/components/ui/button";
import { useDraggable } from "@dnd-kit/react";
import { SnapModifier } from "@dnd-kit/abstract/modifiers";
import { type GridBox } from "../utils/gridBoxProperties";
import { useDinningControlContext } from "../services/control/dinningControlContext";

export default function DinningTable({ box }: { box: GridBox }) {
  const { gridLayoutSettings, grid } = useDinningControlContext();
  const isSelectedBox = grid.selectedBoxID === box.id;
  const { ref, isDragging } = useDraggable({
    id: box.id,
    modifiers: [
      SnapModifier.configure({
        size: gridLayoutSettings.gridSize,
      }),
    ],
  });

  return (
    <div
      data-selected-box={isSelectedBox}
      data-is-dragging={isDragging}
      style={{
        width: `${box.width}px`,
        height: `${box.height}px`,
        translate: `${box.x}px ${box.y}px`,
      }}
      className="absolute rounded-md overflow-hidden data-[selected-box='true']:outline-3 data-[selected-box='true']:outline-solid outline-primary data-[is-dragging='true']:opacity-0"
    >
      <Button
        ref={ref}
        variant="outline"
        className="h-full w-full bg-neutral-500/80! text-primary-foreground! origin-top-left overflow-hidden shadow-2xl"
        onClick={(e) => {
          e.stopPropagation();
          grid.onChangeSelectedBox(box.id);
        }}
      >
        <h3 className="font-en-roboto text-xl font-medium">{box.id}</h3>
      </Button>
    </div>
  );
}
