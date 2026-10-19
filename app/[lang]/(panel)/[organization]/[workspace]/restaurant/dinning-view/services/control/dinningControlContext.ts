import { use, createContext } from "react";
import { OutOfContext } from "@/utils/OutOfContext";
import { type DinningViewDictionary } from "@/internalization/app/dictionaries/panel/restaurant/dining-view/dictionary";
import { type GridBox } from "../../utils/gridBoxProperties";

interface GridLayoutSettings {
  gridSize: number;
  layoutSize: number;
}

interface DinningControlContextProps {
  title: "dinning view control";
  dic: DinningViewDictionary;
  gridLayoutSettings: GridLayoutSettings;
  onChangeRackSettings: <T extends keyof GridLayoutSettings>(
    key: T,
    value: GridLayoutSettings[T],
  ) => unknown;
  tables: {
    showList: boolean;
    onToggleList: () => unknown;
  };
  grid: {
    boxes: GridBox[];
    onAddGridBox: (props: Pick<GridBox, "id">) => unknown;
    onRemoveGridBox: (id: GridBox["id"]) => unknown;
    onUpdateGridBoxProperties: (
      props: Partial<GridBox> & { id: GridBox["id"] },
    ) => unknown;
    selectedBoxID: GridBox["id"] | null;
    onChangeSelectedBox: (id: GridBox["id"] | null) => unknown;
    onTransforBox: (
      props: Pick<GridBox, "x" | "y"> & { id: GridBox["id"] },
    ) => unknown;
  };
}

const DinningControlContext = createContext<DinningControlContextProps | null>(
  null,
);

function useDinningControlContext() {
  const context = use(DinningControlContext);
  if (!context) {
    throw new OutOfContext("DinningControlContext");
  }
  return context;
}

export type { DinningControlContextProps, GridLayoutSettings };
export { DinningControlContext, useDinningControlContext };
