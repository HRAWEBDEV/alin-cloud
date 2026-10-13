import { OutOfContext } from "@/utils/OutOfContext";
import { use, createContext } from "react";
import { type SalesMenusDictionary } from "@/internalization/app/dictionaries/panel/restaurant/sales-menus/dictionary";
import { type ContentViewOption } from "../../utils/contentViewOptions";

interface MenusControlContextProps {
  title: "menusControlContext";
  dic: SalesMenusDictionary;
  contentView: ContentViewOption;
  onChangeContentView(view: ContentViewOption): unknown;
}

const MenusControlContext = createContext<MenusControlContextProps | null>(
  null,
);

function useMenusControlContext() {
  const val = use(MenusControlContext);
  if (!val) throw new OutOfContext("MenusControlContext");
  return val;
}

export type { MenusControlContextProps };
export { MenusControlContext, useMenusControlContext };
