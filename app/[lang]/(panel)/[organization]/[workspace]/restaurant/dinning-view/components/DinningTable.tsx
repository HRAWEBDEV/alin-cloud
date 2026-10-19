"use client";
import { Button } from "@/components/ui/button";
import { useDraggable } from "@dnd-kit/react";
import { SnapModifier } from "@dnd-kit/abstract/modifiers";
import { type GridBox } from "../utils/gridBoxProperties";
import { useDinningControlContext } from "../services/control/dinningControlContext";

export default function DinningTable({ box }: { box: GridBox }) {
  const { gridLayoutSettings } = useDinningControlContext();
  const { ref } = useDraggable({
    id: `draggableBox_${box.id}`,
    modifiers: [
      SnapModifier.configure({
        size: gridLayoutSettings.gridSize,
      }),
    ],
  });

  return (
    <Button
      ref={ref}
      variant="outline"
      className="h-auto size-24 bg-neutral-500! text-primary-foreground!"
    >
      <h3 className="font-en-roboto text-xl font-medium">{box.id}</h3>
    </Button>
  );
}
