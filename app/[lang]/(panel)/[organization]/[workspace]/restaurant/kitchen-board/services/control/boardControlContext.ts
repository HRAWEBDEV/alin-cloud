import { use, createContext } from "react";
import { OutOfContext } from "@/utils/OutOfContext";
import { type KitchenBoardDictionary } from "@/internalization/app/dictionaries/panel/restaurant/kitchen-board/dictionary";

interface BoardControlContextProps {
  title: "boardControlContext";
  dic: KitchenBoardDictionary;
}

const BoardControlContext = createContext<BoardControlContextProps | null>(
  null,
);

function useBoardControlContext() {
  const val = use(BoardControlContext);
  if (!val) throw new OutOfContext("boardControlContext");
  return val;
}

export type { BoardControlContextProps };
export { BoardControlContext, useBoardControlContext };
