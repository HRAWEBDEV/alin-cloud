import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "../../services/side-bar/components/Sidebar";

export default function Header() {
  return (
    <header className="flex h-(--panel-header-height) shrink-0 items-center gap-2 border-b border-border">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mr-2 data-vertical:h-4 data-vertical:self-auto"
        />
      </div>
    </header>
  );
}
