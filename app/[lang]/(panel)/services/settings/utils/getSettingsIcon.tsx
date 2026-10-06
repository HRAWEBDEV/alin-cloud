import { SVGProps } from "react";
import { FaUserCircle } from "react-icons/fa";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";
import { MdOutlineWeb } from "react-icons/md";
import { FaRegKeyboard } from "react-icons/fa";
import { settingItems } from "./settingItems";
import { GoOrganization } from "react-icons/go";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoIosHelpCircle } from "react-icons/io";

export function getSettingsIcon(
  mode?: (typeof settingItems)[number]["key"],
  props?: SVGProps<SVGSVGElement>,
) {
  switch (mode) {
    case "userInfo":
      return <FaUserCircle {...props} />;
    case "organizationInfo":
      return <GoOrganization {...props} />;
    case "organizationMembers":
      return <FaPeopleGroup {...props} />;
    case "userInterface":
      return <MdOutlineWeb {...props} />;
    case "shortcuts":
      return <FaRegKeyboard {...props} />;
    case "help":
      return <IoIosHelpCircle {...props} />;
    case "logout":
      return <RiLogoutBoxRFill {...props} />;
  }
  return null;
}
