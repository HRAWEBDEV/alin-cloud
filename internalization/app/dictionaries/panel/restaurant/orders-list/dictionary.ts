"server-only";
import {
  type Locale,
  getLocaleOrDefault,
} from "@/internalization/app/localization";

type OrdersListDictionary = typeof import("./fa.json");

const dictionaries: Record<Locale, () => Promise<OrdersListDictionary>> = {
  fa: () => import("./fa.json").then((res) => res.default),
  en: () => import("./fa.json").then((res) => res.default),
};

function getOrdersListDictionary({ locale }: { locale: Locale }) {
  const activeLocale = getLocaleOrDefault(locale);
  return dictionaries[activeLocale]();
}

export type { OrdersListDictionary };
export { getOrdersListDictionary };
