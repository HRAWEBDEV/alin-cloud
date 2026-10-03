import { use, createContext } from "react";
import { OutOfContext } from "@/utils/OutOfContext";
import { helpList } from "../utils/helpList";

interface HelpContextProps {
  title: "helpContext";
  helpList: typeof helpList;
  onGetHelpContent: (
    help: HelpContextProps["helpList"][number],
  ) => Promise<string>;
}

const HelpContext = createContext<HelpContextProps | null>(null);

function useHelpContext() {
  const val = use(HelpContext);
  if (!val) throw new OutOfContext("helpContext");
  return val;
}

export type { HelpContextProps };
export { HelpContext, useHelpContext };
