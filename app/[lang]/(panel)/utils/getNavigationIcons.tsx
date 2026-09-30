import { SVGProps } from "react";
import DinnerIcon from "../components/navigation/icons/DinnerIcon";
import { IoSettingsSharp } from "react-icons/io5";

export function getNavigationIcons(
  navItemName?: string,
  props?: SVGProps<SVGSVGElement>,
) {
  switch (navItemName) {
    case "tablesRack":
      return <DinnerIcon {...props} />;
    case "capacityAndPricing":
      return <DinnerIcon {...props} />;
    case "settings":
      return <IoSettingsSharp {...props} />;
  }
  return null;
}
