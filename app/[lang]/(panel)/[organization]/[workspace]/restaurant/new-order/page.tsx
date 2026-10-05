import { type Locale } from "@/internalization/app/localization";
import { Metadata } from "next";
import { getNewOrderDictionary } from "@/internalization/app/dictionaries/panel/restaurant/new-order/dictionary";

export const generateMetadata = async (
  props: LayoutProps<"/[lang]/[organization]/[workspace]/restaurant">,
): Promise<Metadata> => {
  const { lang } = await props.params;
  const meta = await getNewOrderDictionary({ locale: lang as Locale });
  return meta;
};

export default async function TablesRackPage(
  props: PageProps<"/[lang]/[organization]/[workspace]/restaurant/tables">,
) {
  const { lang } = await props.params;
  const dic = await getNewOrderDictionary({ locale: lang as Locale });
  return <div>new order</div>;
}
