import { SVGProps } from "react";
import { MdViewList } from "react-icons/md";
import { MdViewModule } from "react-icons/md";
import { type ContentViewOption } from "./contentViewOptions";

export function getViewOptionIcon(
  view?: ContentViewOption,
  props?: SVGProps<SVGSVGElement>,
) {
  switch (view) {
    case "grid":
      return <MdViewList {...props} />;
    case "list":
      return <MdViewModule {...props} />;
  }
  return null;
}
