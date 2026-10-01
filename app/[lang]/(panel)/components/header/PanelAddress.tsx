import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
export default function PanelAddress() {
  return (
    <Breadcrumb>
      <BreadcrumbList className="group-data-[rich-color='true']:text-neutral-200 dark:group-data-[rich-color='true']:text-neutral-400">
        <BreadcrumbItem className="hidden lg:block">
          <BreadcrumbLink href="#">خـــانه</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="hidden lg:block" />
        <BreadcrumbItem className="hidden lg:block">
          <BreadcrumbLink href="#">اقامتی</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="hidden lg:block" />
        <BreadcrumbItem>
          <BreadcrumbPage className="group-data-[rich-color='true']:text-primary-foreground">
            رزرو جدید
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
