"use client";
import { useState, useEffect } from "react";
import {
  type NewOrderControlContextProps,
  NewOrderControlContext,
} from "./newOrderControlContext";
import { type NewOrderDictionary } from "@/internalization/app/dictionaries/panel/restaurant/new-order/dictionary";
import NewOrderWrapper from "@/app/[lang]/(panel)/[organization]/[workspace]/restaurant/new-order/components/NewOrderWrapper";
import {
  type NewOrderSettings,
  defaultNewOrderSettings,
  getNewOrderSettings,
  saveNewOrderSettings,
} from "../../utils/newOrderSettings";

export default function NewOrderControlProvider({
  dic,
}: {
  dic: NewOrderDictionary;
}) {
  const [settingsLoaded, setSettingsLoaded] = useState(false);
  const [newOrderSettings, setNewOrderSettings] = useState(
    defaultNewOrderSettings,
  );

  function handleChangeNewOrderSettings<T extends keyof NewOrderSettings>(
    key: T,
    value: NewOrderSettings[T],
  ) {
    const newSetting = {
      ...newOrderSettings,
      [key]: value,
    };
    setNewOrderSettings(newSetting);
    saveNewOrderSettings(newSetting);
  }

  const ctx: NewOrderControlContextProps = {
    title: "newOrderControlContext",
    dic,
    newOrderSettings,
    onChangeNewOrderSettings: handleChangeNewOrderSettings,
  };

  useEffect(() => {
    setNewOrderSettings(getNewOrderSettings());
    setSettingsLoaded(true);
  }, []);

  if (!settingsLoaded) return null;
  return (
    <NewOrderControlContext.Provider value={ctx}>
      <NewOrderWrapper />
    </NewOrderControlContext.Provider>
  );
}
