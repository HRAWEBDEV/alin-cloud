"use client";
import { useState, useEffect } from "react";
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

type DinningControlProviderProps = {
  dic: DinningViewDictionary;
};

export default function DinningControlProvider({
  dic,
}: DinningControlProviderProps) {
  const [showTableslist, setShowTablesList] = useState(false);
  const [gridBoxes, setGridBoxes] = useState<GridBox[]>([]);
  const [selectedBoxID, setSelectedBoxID] = useState<GridBox["id"] | null>(
    null,
  );
  const [gridLayoutSettings, setGridLayoutSettings] = useState({
    gridSize: 30,
  });

  function handleChangeSelectedBox(id: GridBox["id"] | null) {
    setSelectedBoxID(id);
  }

  function handleToggleTablesList() {
    setShowTablesList((pre) => !pre);
  }

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
    setGridBoxes((pre) => {
      if (pre.some((item) => item.id === props.id)) return pre;
      const defaultProps = getDefaultGridBoxProperties();
      return [...pre, { ...props, ...defaultProps }];
    });
  }
  function handleRemoveGridBox(id: GridBox["id"]) {
    setGridBoxes((pre) => {
      return pre.filter((item) => item.id !== id);
    });
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
      selectedBoxID,
      onChangeSelectedBox: handleChangeSelectedBox,
      onUpdateGridBoxProperties: handleUpdateGridBoxProperties,
      onAddGridBox: handleAddGridBox,
      onRemoveGridBox: handleRemoveGridBox,
      onTransforBox: handleTransformBox,
    },
  };

  return (
    <DinningControlContext.Provider value={ctx}>
      <DinnigWrapper />
    </DinningControlContext.Provider>
  );
}
