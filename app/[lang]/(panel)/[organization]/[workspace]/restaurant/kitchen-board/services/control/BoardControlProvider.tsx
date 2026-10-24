"use client";
import {
  type BoardControlContextProps,
  BoardControlContext,
} from "./boardControlContext";
import { type KitchenBoardDictionary } from "@/internalization/app/dictionaries/panel/restaurant/kitchen-board/dictionary";
import BoardWrapper from "../../components/BoardWrapper";

export default function BoardControlProvider({
  dic,
}: {
  dic: KitchenBoardDictionary;
}) {
  const ctx: BoardControlContextProps = {
    title: "boardControlContext",
    dic,
  };
  return (
    <BoardControlContext.Provider value={ctx}>
      <BoardWrapper />
    </BoardControlContext.Provider>
  );
}
