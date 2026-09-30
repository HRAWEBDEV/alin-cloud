import { SVGProps } from "react";
import DinnerIcon from "../components/navigation/icons/DinnerIcon";

export function getNavigationIcons(
  navItemName?: string,
  props?: SVGProps<SVGSVGElement>,
) {
  switch (navItemName) {
    case "tablesRack":
      return <DinnerIcon {...props} />;
  }
  return null;
}
