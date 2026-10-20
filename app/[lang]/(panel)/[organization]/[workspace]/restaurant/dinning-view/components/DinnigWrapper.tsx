import { RefObject } from "react";
import DinningGrid from "./DinningGrid";
import DinningTools from "./DinningTools";
import Test from "./Test";

export default function DinnigWrapper({
  gridLayoutRef,
  gridLayoutWrapperRef,
}: {
  gridLayoutRef: RefObject<HTMLDivElement | null>;
  gridLayoutWrapperRef: RefObject<HTMLDivElement | null>;
}) {
  return (
    <div className="flex flex-col grow overflow-hidden relative">
      <DinningGrid
        gridLayoutRef={gridLayoutRef}
        gridLayoutWrapperRef={gridLayoutWrapperRef}
      />
      <DinningTools />
    </div>
  );
}
