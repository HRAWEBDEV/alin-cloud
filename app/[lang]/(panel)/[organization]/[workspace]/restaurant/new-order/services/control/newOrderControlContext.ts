import { OutOfContext } from "@/utils/OutOfContext";
import { use, createContext, Dispatch, SetStateAction } from "react";
import { type NewOrderDictionary } from "@/internalization/app/dictionaries/panel/restaurant/new-order/dictionary";
import { type NewOrderSettings } from "../../utils/newOrderSettings";
import { type EndPanelTab } from "../../utils/endPanelTabs";

interface NewOrderControlContextProps {
  title: "newOrderControlContext";
  dic: NewOrderDictionary;
  activeEndPanelTab: EndPanelTab;
  setActiveEndPanelTab: Dispatch<SetStateAction<EndPanelTab>>;
  newOrderSettings: NewOrderSettings;
  showDesktopStartPanel: boolean;
  showMobileStartPanel: boolean;
  showDesktopEndPanel: boolean;
  showMobileEndPanel: boolean;
  onToggleStartPanel: () => unknown;
  onToggleEndPanel: () => unknown;
  onChangeNewOrderSettings: <T extends keyof NewOrderSettings>(
    key: T,
    value: NewOrderSettings[T],
  ) => unknown;
}

const NewOrderControlContext =
  createContext<NewOrderControlContextProps | null>(null);

function useNewOrderControlContext() {
  const val = use(NewOrderControlContext);
  if (!val) throw new OutOfContext("NewOrderControlContext");
  return val;
}

export { type NewOrderControlContextProps };
export { NewOrderControlContext, useNewOrderControlContext };
