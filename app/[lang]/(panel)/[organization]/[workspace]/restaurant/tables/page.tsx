import { getTablesDictionary } from "@/internalization/app/dictionaries/panel/restaurant/tables/dictionary";
import { type Locale } from "@/internalization/app/localization";
import { Metadata } from "next";

export const generateMetadata = async (
  props: LayoutProps<"/[lang]/[organization]/[workspace]/restaurant">,
): Promise<Metadata> => {
  const { lang } = await props.params;
  const meta = getTablesDictionary({ locale: lang as Locale });
  return meta;
};

export default function TablesPage() {
  return <div>tables</div>;
}
