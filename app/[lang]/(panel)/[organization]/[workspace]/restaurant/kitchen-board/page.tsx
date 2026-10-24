import { type Locale } from "@/internalization/app/localization";
import { Metadata } from "next";
import { getKitchenBoardDictionary } from "@/internalization/app/dictionaries/panel/restaurant/kitchen-board/dictionary";
import BoardControlProvider from "./services/control/BoardControlProvider";

export const generateMetadata = async (
  props: LayoutProps<"/[lang]/[organization]/[workspace]/restaurant">,
): Promise<Metadata> => {
  const { lang } = await props.params;
  const meta = await getKitchenBoardDictionary({ locale: lang as Locale });
  return meta;
};

export default async function BoardPage(
  props: PageProps<"/[lang]/[organization]/[workspace]/restaurant/new-order">,
) {
  const { lang } = await props.params;
  const dic = await getKitchenBoardDictionary({ locale: lang as Locale });
  return <BoardControlProvider dic={dic} />;
}
