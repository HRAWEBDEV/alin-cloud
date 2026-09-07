"use client";
import { ComponentProps } from "react";
import { Sidebar } from "./Sidebar";
import { useBaseConfig } from "@/services/base-config/baseConfigContext";

export default function AppSidebar({
  ...props
}: ComponentProps<typeof Sidebar>) {
  const { localeInfo } = useBaseConfig();
  return (
    <Sidebar
      variant="inset"
      {...props}
      side={localeInfo.contentDirection === "rtl" ? "right" : "left"}
      className="overflow-hidden"
    ></Sidebar>
  );
}
