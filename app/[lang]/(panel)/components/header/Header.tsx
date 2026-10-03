"use client";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "../../services/side-bar/components/Sidebar";
import PanelAddress from "./PanelAddress";
import HeaderProfile from "./HeaderProfile";
import HeaderTools from "./HeaderTools";
import HistoryControllers from "../../services/history/components/HistoryControllers";
import { useSettingsContext } from "../../services/settings/settingsContext";

export default function Header() {
  const {
    panelSettings: { headerBgColor },
  } = useSettingsContext();
  return (
    <header
      data-rich-color={headerBgColor === "rich"}
      className="group data-[rich-color='true']:bg-primary flex h-(--panel-header-height) shrink-0 items-center gap-2 border-b border-border"
    >
      <div className="flex items-center ps-4 grow">
        <SidebarTrigger className="rounded-full group-data-[rich-color='true']:text-primary-foreground hidden md:block" />
        <div className="hidden lg:block">
          <HistoryControllers />
        </div>
        <Separator
          orientation="vertical"
          className="mx-2 data-vertical:h-4 data-vertical:self-auto hidden md:block"
        />
        <PanelAddress />
      </div>
      <div className="flex flex-row-reverse items-center gap-1 pe-4">
        <HeaderProfile />
        <Separator
          orientation="vertical"
          className="me-2 data-vertical:h-4 data-vertical:self-auto"
        />
        <HeaderTools />
      </div>
    </header>
  );
}
