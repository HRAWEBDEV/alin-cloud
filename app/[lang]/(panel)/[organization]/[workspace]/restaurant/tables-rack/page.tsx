import { type Locale } from "@/internalization/app/localization";
import { Metadata } from "next";
import { getTablesRackDictionary } from "@/internalization/app/dictionaries/panel/restaurant/tables-rack/dictionary";

export const generateMetadata = async (
  props: LayoutProps<"/[lang]/[organization]/[workspace]/restaurant">,
): Promise<Metadata> => {
  const { lang } = await props.params;
  const meta = await getTablesRackDictionary({ locale: lang as Locale });
  return meta;
};

export default async function TablesRackPage(
  props: PageProps<"/[lang]/[organization]/[workspace]/restaurant/tables">,
) {
  const { lang } = await props.params;
  const dic = await getTablesRackDictionary({ locale: lang as Locale });
  return <>test</>;
}
