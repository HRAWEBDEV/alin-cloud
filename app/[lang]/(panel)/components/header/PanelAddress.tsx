"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import { useFindNavigationItemByPathname } from "../../hooks/useFindNavigationItem";
import { useShareDictionary } from "@/services/share-dictionary/shareDictionaryContext";
import { useIsHomePage } from "../../hooks/useIsHomePage";
import { useGoHome } from "../../hooks/useGoHome";

export default function PanelAddress() {
  const isHomePage = useIsHomePage();
  const { homePath } = useGoHome();
  const {
    shareDictionary: {
      components: { navigation: dic },
    },
  } = useShareDictionary();
  const pathname = usePathname();
  const check = useFindNavigationItemByPathname();
  const navItem = check(pathname);
  return (
    <Breadcrumb>
      <BreadcrumbList className="group-data-[rich-color='true']:text-neutral-300 dark:group-data-[rich-color='true']:text-neutral-300">
        <BreadcrumbItem className="hidden lg:block">
          <BreadcrumbLink href={homePath}>خـــانه</BreadcrumbLink>
        </BreadcrumbItem>
        {!isHomePage && (
          <>
            <BreadcrumbSeparator className="hidden lg:block" />

            <BreadcrumbItem>
              <BreadcrumbPage className="group-data-[rich-color='true']:text-primary-foreground">
                {navItem ? dic[navItem.name as keyof typeof dic] : ""}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
