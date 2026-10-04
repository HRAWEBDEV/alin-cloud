"server-only";
import {
  type Locale,
  getLocaleOrDefault,
} from "@/internalization/app/localization";

type TablesRackDictionary = typeof import("./fa.json");

const dictionaries: Record<Locale, () => Promise<TablesRackDictionary>> = {
  fa: () => import("./fa.json").then((res) => res.default),
  en: () => import("./fa.json").then((res) => res.default),
};

function getTablesRackDictionary({ locale }: { locale: Locale }) {
  const activeLocale = getLocaleOrDefault(locale);
  return dictionaries[activeLocale]();
}

export type { TablesRackDictionary };
export { getTablesRackDictionary };
