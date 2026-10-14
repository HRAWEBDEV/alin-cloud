"use clinet";
import { useMenusControlContext } from "../services/control/menusControlContext";
import MenusGrid from "./MenusGrid";

export default function MenusList() {
  const { contentView } = useMenusControlContext();
  if (contentView === "grid") {
    return <MenusGrid />;
  } else {
    return <></>;
  }
}
