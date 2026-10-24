import { SVGProps } from "react";
import DinnerIcon from "../components/navigation/icons/DinnerIcon";
import DinninTableIcon from "../components/navigation/icons/DinningTableIcon";
import DishIcon from "../components/navigation/icons/DishIcon";
import OrdersBoard from "../components/navigation/icons/OrdersBoard";
import KitchenBoard from "../components/navigation/icons/KitchenBoard";
import { HiClipboardList } from "react-icons/hi";
import { IoSettingsSharp } from "react-icons/io5";
import { MdOutlineMenuBook } from "react-icons/md";

export function getNavigationIcons(
  navItemName?: string,
  props?: SVGProps<SVGSVGElement>,
) {
  switch (navItemName) {
    case "dinningView":
      return <DinninTableIcon {...props} />;
    case "tablesRack":
      return <DinnerIcon {...props} />;
    case "newOrder":
      return <DishIcon {...props} style={{ ...props?.style, scale: 1.3 }} />;
    case "ordersBoard":
      return <OrdersBoard {...props} />;
    case "kitchenBoard":
      return <KitchenBoard {...props} />;
    case "capacityAndPricing":
      return <MdOutlineMenuBook {...props} />;
    case "ordersList":
      return <HiClipboardList {...props} />;
    case "settings":
      return <IoSettingsSharp {...props} />;
  }
  return null;
}
