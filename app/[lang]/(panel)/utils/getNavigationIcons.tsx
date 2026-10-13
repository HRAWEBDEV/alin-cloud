import { SVGProps } from "react";
import DinnerIcon from "../components/navigation/icons/DinnerIcon";
import DishIcon from "../components/navigation/icons/DishIcon";
import { CiViewList } from "react-icons/ci";
import { IoSettingsSharp } from "react-icons/io5";
import { MdOutlineMenuBook } from "react-icons/md";

export function getNavigationIcons(
  navItemName?: string,
  props?: SVGProps<SVGSVGElement>,
) {
  switch (navItemName) {
    case "tablesRack":
      return <DinnerIcon {...props} />;
    case "newOrder":
      return <DishIcon {...props} />;
    case "capacityAndPricing":
      return <MdOutlineMenuBook {...props} />;
    case "ordersList":
      return <CiViewList {...props} />;
    case "settings":
      return <IoSettingsSharp {...props} />;
  }
  return null;
}
