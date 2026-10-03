"use client";
import { useMatchMedia } from "@/hooks/useMatchMedia";
import { BREAK_POINTS } from "@/utils/breakPoints";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaHouse } from "react-icons/fa6";
import { useGoHome } from "../../hooks/useGoHome";
import { useSidebar } from "../../services/side-bar/sidebarContext";
import { IoMenu } from "react-icons/io5";

export default function TabsNav() {
  const isMatched = useMatchMedia({ breakPoint: BREAK_POINTS.md });
  const { goHome } = useGoHome();
  const { setOpenMobile } = useSidebar();
  return (
    <>
      {isMatched ? (
        <nav className="h-(--panel-tab-height) fixed bottom-0 inset-e-0 inset-s-0 border-t border-border z-(--panel-tab-zindex) transition-transform in-data-[scroll-dicretion='down']:translate-y-20">
          <Tabs value="">
            <TabsList className="w-full rounded-none h-auto!">
              <TabsTrigger
                value="home"
                className="basis-0 grow flex-col h-auto gap-px p-px"
                onClick={goHome}
              >
                <FaHouse className="size-5" />
                <span className="text-sm">خـــانه</span>
              </TabsTrigger>
              <TabsTrigger
                value="menu"
                className="basis-0 grow flex-col h-auto gap-px p-px"
                onClick={() => setOpenMobile(true)}
              >
                <IoMenu className="size-5" />
                <span className="text-sm">منو</span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </nav>
      ) : null}
    </>
  );
}
