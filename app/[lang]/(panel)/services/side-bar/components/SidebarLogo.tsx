"use client";
import { Button } from "@/components/ui/button";
import LogoShape from "@/components/LogoShape";
import Link from "next/link";
import { useGoHome } from "@/app/[lang]/(panel)/hooks/useGoHome";

export default function SidebarHotelInfo() {
  const { homePath } = useGoHome();
  return (
    <div>
      <Button
        variant="ghost"
        className="w-full justify-stretch text-start p-2 h-auto bg-transparent rounded-none min-h-(--panel-header-height)"
        nativeButton={false}
        render={
          <Link href={homePath}>
            <div className="flex gap-4 items-center grow text-neutral-700 dark:text-neutral-400">
              <LogoShape className="size-12" />
              <div className="grow grid">
                <h3 className="mb-0.5 truncate">آلین کلود</h3>
                <p className="text-xs text-neutral-500">
                  نرم‌افزار مدیریت رستوران
                </p>
              </div>
            </div>
          </Link>
        }
      ></Button>
    </div>
  );
}
