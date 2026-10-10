import { type Locale } from "@/internalization/app/localization";
import { Metadata } from "next";
import { getOrdersListDictionary } from "@/internalization/app/dictionaries/panel/restaurant/orders-list/dictionary";

export const generateMetadata = async (
  props: LayoutProps<"/[lang]/[organization]/[workspace]/restaurant">,
): Promise<Metadata> => {
  const { lang } = await props.params;
  const meta = await getOrdersListDictionary({ locale: lang as Locale });
  return meta;
};

export default async function SalonsPage(
  props: PageProps<"/[lang]/[organization]/[workspace]/restaurant/new-order">,
) {
  const { lang } = await props.params;
  const dic = await getOrdersListDictionary({ locale: lang as Locale });
  return <div>order list</div>;
}
