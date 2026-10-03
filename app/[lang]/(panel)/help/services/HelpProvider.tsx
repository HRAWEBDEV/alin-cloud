"use client";
import { ReactNode, useMemo } from "react";
import { HelpContext, type HelpContextProps } from "./HelpContext";
import { helpList } from "../utils/helpList";
import { useBaseConfig } from "@/services/base-config/baseConfigContext";
import axios from "axios";

export default function HelpProvider({ children }: { children: ReactNode }) {
  const { locale } = useBaseConfig();
  const basePath = useMemo(() => `/help/${locale}/`, [locale]);

  async function handleGetHelpContent(
    help: HelpContextProps["helpList"][number],
  ) {
    try {
      const res = await axios.get(`${basePath}/${help.type}.md`);
      return res.data as string;
    } catch {
      return "";
    }
  }

  const ctx: HelpContextProps = {
    title: "helpContext",
    helpList,
    onGetHelpContent: handleGetHelpContent,
  };
  return <HelpContext.Provider value={ctx}>{children}</HelpContext.Provider>;
}
