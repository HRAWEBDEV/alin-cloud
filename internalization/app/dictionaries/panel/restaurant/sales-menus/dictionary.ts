"server-only";
import {
  type Locale,
  getLocaleOrDefault,
} from "@/internalization/app/localization";

type SalesMenusDictionary = typeof import("./fa.json");

const dictionaries: Record<Locale, () => Promise<SalesMenusDictionary>> = {
  fa: () => import("./fa.json").then((res) => res.default),
  en: () => import("./fa.json").then((res) => res.default),
};

function getSalesMenusDictionary({ locale }: { locale: Locale }) {
  const activeLocale = getLocaleOrDefault(locale);
  return dictionaries[activeLocale]();
}

export type { SalesMenusDictionary };
export { getSalesMenusDictionary };
