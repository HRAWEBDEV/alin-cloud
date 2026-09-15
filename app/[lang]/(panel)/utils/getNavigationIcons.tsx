import { SVGProps } from "react";
import ReservationIcon from "../components/navigation/icons/ReservationIcon";
import { IoSettingsOutline } from "react-icons/io5";
import ReceptionIcon from "../components/navigation/icons/ReceptionIcon";

export function getNavigationIcons(
  navItemName?: string,
  props?: SVGProps<SVGSVGElement>,
) {
  switch (navItemName) {
    case "reservation":
      return <ReservationIcon {...props} />;
    case "reception":
      return <ReceptionIcon {...props} />;
    case "settings":
      return <IoSettingsOutline {...props} />;
  }
  return null;
}
