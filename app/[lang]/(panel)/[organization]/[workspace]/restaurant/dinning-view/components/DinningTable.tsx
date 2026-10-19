"use client";
import { Button } from "@/components/ui/button";
import { useDraggable } from "@dnd-kit/react";
import { SnapModifier } from "@dnd-kit/abstract/modifiers";
import { type GridBox } from "../utils/gridBoxProperties";
import { useDinningControlContext } from "../services/control/dinningControlContext";

export default function DinningTable({ box }: { box: GridBox }) {
  const { gridLayoutSettings, grid } = useDinningControlContext();
  const { ref } = useDraggable({
    id: box.id,
    modifiers: [
      SnapModifier.configure({
        size: gridLayoutSettings.gridSize,
      }),
    ],
  });

  return (
    <Button
      data-selected-box={grid.selectedBoxID === box.id}
      ref={ref}
      style={{
        width: `${box.width}px`,
        height: `${box.height}px`,
        translate: `${box.x}px ${box.y}px `,
      }}
      variant="outline"
      className="h-auto bg-neutral-500! text-primary-foreground! origin-top-left absolute data-[selected-box='true']:outline-4 data-[selected-box='true']:outline-solid outline-primary"
      onClick={(e) => {
        e.stopPropagation();
        grid.onChangeSelectedBox(box.id);
      }}
    >
      <h3 className="font-en-roboto text-xl font-medium">{box.id}</h3>
    </Button>
  );
}
