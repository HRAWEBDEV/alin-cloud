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
import { useMatchMedia } from "@/hooks/useMatchMedia";
import { BREAK_POINTS } from "@/utils/breakPoints";

export default function NewOrderControlProvider({
  dic,
}: {
  dic: NewOrderDictionary;
}) {
  const [showStartPanel, setShowStartPanel] = useState(true);
  const [showEndPanel, setShowEndPanel] = useState(true);
  const matchedXl = useMatchMedia({ breakPoint: BREAK_POINTS.xl });
  const matchedLg = useMatchMedia({ breakPoint: BREAK_POINTS.lg });
  const [settingsLoaded, setSettingsLoaded] = useState(false);
  const [newOrderSettings, setNewOrderSettings] = useState(
    defaultNewOrderSettings,
  );

  const showDesktopStartPanel = showStartPanel && !matchedXl;
  const showMobileStartPanel = showStartPanel && matchedXl;
  const showDesktopEndPanel = showEndPanel && !matchedLg;
  const showMobileEndPanel = showEndPanel && matchedLg;

  function handleToggleStartPanel() {
    setShowStartPanel((pre) => !pre);
  }
  function handleToggleEndPanel() {
    setShowEndPanel((pre) => !pre);
  }

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
    showDesktopStartPanel,
    showMobileStartPanel,
    showDesktopEndPanel,
    showMobileEndPanel,
    onToggleStartPanel: handleToggleStartPanel,
    onToggleEndPanel: handleToggleEndPanel,
    onChangeNewOrderSettings: handleChangeNewOrderSettings,
  };

  useEffect(() => {
    if (matchedXl) {
      setShowStartPanel(false);
    }
  }, [matchedXl]);

  useEffect(() => {
    if (matchedLg) {
      setShowEndPanel(false);
    }
  }, [matchedLg]);

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
