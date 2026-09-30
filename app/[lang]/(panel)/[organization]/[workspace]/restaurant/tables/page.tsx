import { getTablesDictionary } from "@/internalization/app/dictionaries/panel/restaurant/tables/dictionary";
import { type Locale } from "@/internalization/app/localization";
import { Metadata } from "next";
import TablesControlProvider from "./services/control/TablesControlProvider";

export const generateMetadata = async (
  props: LayoutProps<"/[lang]/[organization]/[workspace]/restaurant">,
): Promise<Metadata> => {
  const { lang } = await props.params;
  const meta = await getTablesDictionary({ locale: lang as Locale });
  return meta;
};

export default async function TablesPage(
  props: PageProps<"/[lang]/[organization]/[workspace]/restaurant/tables">,
) {
  const { lang } = await props.params;
  const dic = await getTablesDictionary({ locale: lang as Locale });
  return <TablesControlProvider dic={dic} />;
}
