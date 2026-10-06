"use client";
import { useState, useEffect } from "react";
import {
  type RackControlContextProps,
  RackControlContext,
} from "./rackControlContext";
import { type TablesRackDictionary } from "@/internalization/app/dictionaries/panel/restaurant/tables-rack/dictionary";
import RackWrapper from "@/app/[lang]/(panel)/[organization]/[workspace]/restaurant/tables-rack/components/RackWrapper";
import {
  type RackSettings,
  getRackSettings,
  defaultRackSettings,
  saveRackSettings,
} from "../../utils/rackSettings";
import { useIsMobile } from "@/hooks/use-mobile";

export default function RackControlProvider({
  dic,
}: {
  dic: TablesRackDictionary;
}) {
  const isMobile = useIsMobile();
  const [showSidebar, setShowSidebar] = useState(true);
  const [rackSettings, setRackSettings] =
    useState<RackSettings>(defaultRackSettings);

  const showDesktopSidebar = showSidebar && !isMobile;
  const showMobileSidebar = showSidebar && isMobile;

  function handleToggleSidebar() {
    setShowSidebar((pre) => !pre);
  }

  function handleChangeRackSettings<T extends keyof RackSettings>(
    key: T,
    value: RackSettings[T],
  ) {
    const newSetting = {
      ...rackSettings,
      [key]: value,
    };
    setRackSettings(newSetting);
    saveRackSettings(newSetting);
  }

  const ctx: RackControlContextProps = {
    title: "rackControlContext",
    dic,
    rackSettings,
    showDesktopSidebar,
    showMobileSidebar,
    onToggleSidebar: handleToggleSidebar,
    onChangeRackSettings: handleChangeRackSettings,
  };

  useEffect(() => {
    setRackSettings(getRackSettings());
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    setShowSidebar(false);
  }, []);

  return (
    <RackControlContext.Provider value={ctx}>
      <RackWrapper />
    </RackControlContext.Provider>
  );
}
