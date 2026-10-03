import { type Locale } from "@/internalization/app/localization";
import { Metadata } from "next";
import { getSalonsDictionary } from "@/internalization/app/dictionaries/panel/restaurant/salons/dictionary";
import SalonsControlProvider from "./services/control/SalonsControlProvider";

export const generateMetadata = async (
  props: LayoutProps<"/[lang]/[organization]/[workspace]/restaurant">,
): Promise<Metadata> => {
  const { lang } = await props.params;
  const meta = await getSalonsDictionary({ locale: lang as Locale });
  return meta;
};

export default async function SalonsPage(
  props: PageProps<"/[lang]/[organization]/[workspace]/restaurant/salons">,
) {
  const { lang } = await props.params;
  const dic = await getSalonsDictionary({ locale: lang as Locale });
  return <SalonsControlProvider dic={dic} />;
}
