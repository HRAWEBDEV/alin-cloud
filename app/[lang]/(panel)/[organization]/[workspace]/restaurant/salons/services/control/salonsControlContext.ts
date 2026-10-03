import { use, createContext } from "react";
import { OutOfContext } from "@/utils/OutOfContext";
import { type SalonsDictionary } from "@/internalization/app/dictionaries/panel/restaurant/salons/dictionary";

interface SalonsControlContextProps {
  title: "salonsControlContext";
  dic: SalonsDictionary;
  editSalon: {
    open: boolean;
    onToggle(state: boolean, id: number | null): unknown;
  };
}

const SalonsControlContext = createContext<SalonsControlContextProps | null>(
  null,
);

function useSalonsControlContext() {
  const val = use(SalonsControlContext);
  if (!val) throw new OutOfContext("salonsControlContext");
  return val;
}

export type { SalonsControlContextProps };
export { SalonsControlContext, useSalonsControlContext };
