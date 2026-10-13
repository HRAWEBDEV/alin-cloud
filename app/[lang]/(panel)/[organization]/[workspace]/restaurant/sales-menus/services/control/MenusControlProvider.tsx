"use client";
import {
  type MenusControlContextProps,
  MenusControlContext,
} from "./menusControlContext";
import { type SalesMenusDictionary } from "@/internalization/app/dictionaries/panel/restaurant/sales-menus/dictionary";
import MenusWrapper from "../../components/MenusWrapper";
import { useIsMobile } from "@/hooks/use-mobile";
import { useEffect, useState } from "react";
import { type ContentViewOption } from "../../utils/contentViewOptions";

export default function MenusControlProvider({
  dic,
}: {
  dic: SalesMenusDictionary;
}) {
  const isMatched = useIsMobile();
  const [showEditMenu, setShowEditMenu] = useState(false);
  const [activeContentView, setActiveContentView] =
    useState<ContentViewOption>("grid");

  function handleChangeContentView(view: ContentViewOption) {
    setActiveContentView(view);
  }
  function handleToggleEditMenu(state: boolean, id: number | null) {
    setShowEditMenu(state);
  }
  // tables setup

  const ctx: MenusControlContextProps = {
    title: "menusControlContext",
    dic,
    contentView: activeContentView,
    onChangeContentView: handleChangeContentView,
  };

  useEffect(() => {
    if (!isMatched) return;
    handleChangeContentView("list");
  }, [isMatched]);

  return (
    <MenusControlContext.Provider value={ctx}>
      <MenusWrapper />
    </MenusControlContext.Provider>
  );
}
