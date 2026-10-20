"use client";
import { useState, useRef } from "react";
import {
  type DinningControlContextProps,
  type GridLayoutSettings,
  DinningControlContext,
} from "./dinningControlContext";
import { type DinningViewDictionary } from "@/internalization/app/dictionaries/panel/restaurant/dining-view/dictionary";
import DinnigWrapper from "../../components/DinnigWrapper";
import {
  type GridBox,
  getDefaultGridBoxProperties,
} from "../../utils/gridBoxProperties";
import { useShortcutsContext } from "@/app/[lang]/(panel)/services/shortcuts/shortcutsContext";
import { useHotkey } from "@tanstack/react-hotkeys";

type DinningControlProviderProps = {
  dic: DinningViewDictionary;
};

export default function DinningControlProvider({
  dic,
}: DinningControlProviderProps) {
  const { onGetShortcutKeys } = useShortcutsContext();
  const [showTableslist, setShowTablesList] = useState(false);
  const [selectedBoxIds, setSelectedBoxIds] = useState<GridBox["id"][]>([]);
  const [gridBoxes, setGridBoxes] = useState<GridBox[]>([]);
  const [gridLayoutSettings, setGridLayoutSettings] = useState({
    gridSize: 30,
    layoutSize: 1900,
  });
  const gridLayoutWrapperRef = useRef<HTMLDivElement>(null);
  const gridLayoutRef = useRef<HTMLDivElement>(null);

  function handleToggleTablesList() {
    setShowTablesList((pre) => !pre);
  }

  // selection setup
  function handleToggleBoxSelection({
    boxId,
    range = false,
  }: {
    boxId: GridBox["id"] | null;
    range?: boolean;
  }) {
    if (!boxId) {
      setSelectedBoxIds([]);
      return;
    }
    setSelectedBoxIds((pre) => {
      if (!range) return [boxId];
      const doesBoxExist = pre.some((item) => item === boxId);
      if (doesBoxExist) return pre.filter((item) => item !== boxId);
      return [...pre, boxId];
    });
  }

  // settings setup
  function handleChangeRackSettings<T extends keyof GridLayoutSettings>(
    key: T,
    value: GridLayoutSettings[T],
  ) {
    const newSetting = {
      ...gridLayoutSettings,
      [key]: value,
    };
    setGridLayoutSettings(newSetting);
  }
  // grid box actions
  function handleAddGridBox(props: Pick<GridBox, "id">) {
    const wrapperWidth = gridLayoutWrapperRef.current?.offsetWidth || 0;
    const wrapperHeight = gridLayoutWrapperRef.current?.offsetHeight || 0;
    const wrapperScrollTop = gridLayoutWrapperRef.current?.scrollTop || 0;
    const wrapperScrollLeft = gridLayoutWrapperRef.current?.scrollLeft || 0;

    setGridBoxes((pre) => {
      if (pre.some((item) => item.id === props.id)) return pre;
      const defaultProps = getDefaultGridBoxProperties();
      function calcuateXToGridSize(x: number) {
        return (
          gridLayoutSettings.gridSize *
          Math.floor(x / gridLayoutSettings.gridSize)
        );
      }
      const heightToGridSize = calcuateXToGridSize(wrapperHeight / 2);
      const widthToGridSize = calcuateXToGridSize(wrapperWidth / 2);
      const scrollTopToGridSize = calcuateXToGridSize(wrapperScrollTop);
      const scrollLeftToGridSize = calcuateXToGridSize(wrapperScrollLeft);
      const newXPosition = widthToGridSize + scrollLeftToGridSize;
      const newYPosition = heightToGridSize + scrollTopToGridSize;
      return [
        ...pre,
        { ...props, ...defaultProps, x: newXPosition, y: newYPosition },
      ];
    });
  }
  function handleRemoveGridBoxes(ids: GridBox["id"][]) {
    setGridBoxes((pre) => {
      return pre.filter((item) => !ids.includes(item.id));
    });
    setSelectedBoxIds([]);
  }

  function handleUpdateGridBoxProperties(
    props: Partial<GridBox> & { id: GridBox["id"] },
  ) {
    setGridBoxes((pre) => {
      return pre.map((item) => {
        if (item.id === props.id) {
          return { ...item, ...props };
        }
        return item;
      });
    });
  }

  function handleTransformBox(
    props: Pick<GridBox, "x" | "y"> & { id: GridBox["id"] },
  ) {
    setGridBoxes((pre) => {
      return pre.map((item) => {
        if (item.id === props.id) {
          return {
            ...item,
            x: item.x + props.x,
            y: item.y + props.y,
          };
        }
        return item;
      });
    });
  }
  // shortucts
  useHotkey(onGetShortcutKeys("dinningView", "deleteBox"), () => {
    handleRemoveGridBoxes(selectedBoxIds);
  });

  const ctx: DinningControlContextProps = {
    title: "dinning view control",
    dic,
    gridLayoutSettings,
    onChangeRackSettings: handleChangeRackSettings,
    tables: {
      showList: showTableslist,
      onToggleList: handleToggleTablesList,
    },
    grid: {
      boxes: gridBoxes,
      selectedBoxIds,
      onToggleBoxSelection: handleToggleBoxSelection,
      onUpdateGridBoxProperties: handleUpdateGridBoxProperties,
      onAddGridBox: handleAddGridBox,
      onRemoveGridBoxes: handleRemoveGridBoxes,
      onTransforBox: handleTransformBox,
    },
  };

  return (
    <DinningControlContext.Provider value={ctx}>
      <DinnigWrapper
        gridLayoutRef={gridLayoutRef}
        gridLayoutWrapperRef={gridLayoutWrapperRef}
      />
    </DinningControlContext.Provider>
  );
}
