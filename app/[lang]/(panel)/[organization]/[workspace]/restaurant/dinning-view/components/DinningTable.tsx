"use client";
import { Button } from "@/components/ui/button";
import { useDraggable } from "@dnd-kit/react";
import { SnapModifier } from "@dnd-kit/abstract/modifiers";
import { RestrictToElement } from "@dnd-kit/dom/modifiers";
import { type GridBox } from "../utils/gridBoxProperties";
import { useDinningControlContext } from "../services/control/dinningControlContext";
import { Resizable } from "react-resizable";
import { RefObject } from "react";
import { defaultGridBoxProperties } from "../utils/gridBoxProperties";

export default function DinningTable({
  box,
  gridLayoutRef,
}: {
  box: GridBox;
  gridLayoutRef: RefObject<HTMLDivElement | null>;
}) {
  const { gridLayoutSettings, grid } = useDinningControlContext();
  const isSelectedBox = grid.selectedBoxIds.includes(box.id);
  const { ref, isDragging } = useDraggable({
    id: box.id,
    modifiers: [
      // eslint-disable-next-line react-hooks/refs
      RestrictToElement.configure({
        element() {
          return gridLayoutRef.current;
        },
      }),
      SnapModifier.configure({
        size: gridLayoutSettings.gridSize,
      }),
    ],
  });

  return (
    <Resizable
      width={box.width}
      height={box.height}
      minConstraints={[
        defaultGridBoxProperties.width,
        defaultGridBoxProperties.height,
      ]}
      maxConstraints={[
        defaultGridBoxProperties.width * 5,
        defaultGridBoxProperties.height * 5,
      ]}
      axis="both"
      handle={(cl, ref) => {
        return (
          <div
            ref={ref as RefObject<HTMLDivElement>}
            className={`absolute size-4 bottom-1 inset-e-0 z-2 translate-x-1/2 translate-y-1/2 ${cl} rounded-full border-2 border-primary bg-background cursor-se-resize ${isSelectedBox ? "" : "opacity-0"}`}
          ></div>
        );
      }}
      onResize={(_, { size }) => {
        grid.onUpdateGridBoxProperties({
          id: box.id,
          width: size.width,
          height: size.height,
        });
      }}
    >
      <div
        data-is-selected-box={isSelectedBox}
        data-is-dragging={isDragging}
        style={{
          width: `${box.width}px`,
          height: `${box.height}px`,
          translate: `${box.x}px ${box.y}px`,
        }}
        className="rounded-md data-[is-selected-box='true']:p-1 flex flex-col isolate absolute! data-[is-dragging='true']:opacity-0 data-[is-selected-box='true']:outline-3 data-[is-selected-box='true']:outline-primary"
      >
        <Button
          ref={ref}
          variant="outline"
          className="h-full w-full bg-amber-800/80! text-primary-foreground! origin-top-left rounded-md overflow-hidden outline-primary z-1"
          onClick={(e) => {
            e.stopPropagation();
            grid.onToggleBoxSelection({ boxId: box.id, range: e.ctrlKey });
          }}
        >
          <h3 className="font-en-roboto text-xl font-medium">{box.id}</h3>
        </Button>
      </div>
    </Resizable>
  );
}
