import { type Locale } from "@/internalization/app/localization";
import { Metadata } from "next";
import { getDinningViewDictionary } from "@/internalization/app/dictionaries/panel/restaurant/dining-view/dictionary";
import DinningControlProvider from "./services/control/DinningControlProvider";

export const generateMetadata = async (
  props: LayoutProps<"/[lang]/[organization]/[workspace]/restaurant">,
): Promise<Metadata> => {
  const { lang } = await props.params;
  const meta = await getDinningViewDictionary({ locale: lang as Locale });
  return meta;
};

export default async function TablesRackPage(
  props: PageProps<"/[lang]/[organization]/[workspace]/restaurant/tables">,
) {
  const { lang } = await props.params;
  const dic = await getDinningViewDictionary({ locale: lang as Locale });
  return <DinningControlProvider dic={dic} />;
}
