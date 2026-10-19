"use client";
import { Button } from "@/components/ui/button";
import { useDraggable } from "@dnd-kit/react";
import { SnapModifier } from "@dnd-kit/abstract/modifiers";
import { type GridBox } from "../utils/gridBoxProperties";
import { useDinningControlContext } from "../services/control/dinningControlContext";
import { Resizable } from "react-resizable";
import { RefObject } from "react";
import { defaultGridBoxProperties } from "../utils/gridBoxProperties";

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
      handle={(handleAxis, ref) => {
        return isSelectedBox ? (
          <div
            ref={ref as RefObject<HTMLDivElement>}
            onPointerDown={() => {}}
            className={`${handleAxis} absolute z-0 inset-0 border-3 border-primary rounded-md cursor-nwse-resize`}
          ></div>
        ) : (
          <div className="hidden"></div>
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
        className="data-[is-selected-box='true']:p-1 flex flex-col absolute! isolate data-[is-dragging='true']:opacity-0"
      >
        <Button
          ref={ref}
          variant="outline"
          className="h-full w-full bg-amber-800/80! text-primary-foreground! origin-top-left rounded-md overflow-hidden outline-primary z-1"
          onClick={(e) => {
            e.stopPropagation();
            grid.onChangeSelectedBox(box.id);
          }}
        >
          <h3 className="font-en-roboto text-xl font-medium">{box.id}</h3>
        </Button>
      </div>
    </Resizable>
  );
}
