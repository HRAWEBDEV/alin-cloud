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

export default function RackControlProvider({
  dic,
}: {
  dic: TablesRackDictionary;
}) {
  const [rackSettings, setRackSettings] =
    useState<RackSettings>(defaultRackSettings);

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
    onChangeRackSettings: handleChangeRackSettings,
  };

  useEffect(() => {
    setRackSettings(getRackSettings());
  }, []);

  return (
    <RackControlContext.Provider value={ctx}>
      <RackWrapper />
    </RackControlContext.Provider>
  );
}
