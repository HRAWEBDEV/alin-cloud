"server-only";
import {
  type Locale,
  getLocaleOrDefault,
} from "@/internalization/app/localization";

type DinningViewDictionary = typeof import("./fa.json");

const dictionaries: Record<Locale, () => Promise<DinningViewDictionary>> = {
  fa: () => import("./fa.json").then((res) => res.default),
  en: () => import("./fa.json").then((res) => res.default),
};

function getDinningViewDictionary({ locale }: { locale: Locale }) {
  const activeLocale = getLocaleOrDefault(locale);
  return dictionaries[activeLocale]();
}

export type { DinningViewDictionary };
export { getDinningViewDictionary };
