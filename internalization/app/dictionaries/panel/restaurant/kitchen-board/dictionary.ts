"server-only";
import {
  type Locale,
  getLocaleOrDefault,
} from "@/internalization/app/localization";

type KitchenBoardDictionary = typeof import("./fa.json");

const dictionaries: Record<Locale, () => Promise<KitchenBoardDictionary>> = {
  fa: () => import("./fa.json").then((res) => res.default),
  en: () => import("./fa.json").then((res) => res.default),
};

function getKitchenBoardDictionary({ locale }: { locale: Locale }) {
  const activeLocale = getLocaleOrDefault(locale);
  return dictionaries[activeLocale]();
}

export type { KitchenBoardDictionary };
export { getKitchenBoardDictionary };
