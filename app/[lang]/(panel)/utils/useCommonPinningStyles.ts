import { CSSProperties, useCallback } from "react";

type PinSide = "end" | "start";

interface PinnableColumn {
  getIsPinned: () => PinSide | false;
  getStart: (position?: PinSide | "center") => number;
  getAfter: (position?: PinSide | "center") => number;
  getSize: () => number;
}

function getCommonPinningStyles(column: PinnableColumn): CSSProperties {
  const pinSide = column.getIsPinned();

  let boxShadow: string | undefined = undefined;
  if (pinSide === "start") {
    boxShadow = "2px 0 2px -2px gray inset";
  } else if (pinSide === "end") {
    boxShadow = "-2px 0 2px -2px gray inset";
  }

  return {
    insetInlineEnd: pinSide === "end" ? column.getAfter(pinSide) : undefined,
    insetInlineStart:
      pinSide === "start" ? column.getStart(pinSide) : undefined,
    opacity: !!pinSide ? 0.95 : 1,
    position: !!pinSide ? "sticky" : undefined,
    width: `${column.getSize()}px`,
    boxShadow,
  };
}

function useCommonPinningStyles() {
  return useCallback(
    (column: PinnableColumn) => getCommonPinningStyles(column),
    [],
  );
}

export { getCommonPinningStyles, useCommonPinningStyles };
export type { PinnableColumn };
