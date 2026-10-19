"use client";
import { useState } from "react";
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
  const [gridLayoutSettings, setGridLayoutSettings] = useState({
    gridSize: 30,
  });

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
      return [...pre, { ...props, ...getDefaultGridBoxProperties() }];
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
      onAddGridBox: handleAddGridBox,
    },
  };

  return (
    <DinningControlContext.Provider value={ctx}>
      <DinnigWrapper />
    </DinningControlContext.Provider>
  );
}
