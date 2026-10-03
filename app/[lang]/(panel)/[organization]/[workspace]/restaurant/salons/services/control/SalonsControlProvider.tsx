"use client";
import { useState } from "react";
import {
  type SalonsControlContextProps,
  SalonsControlContext,
} from "./salonsControlContext";
import { type SalonsDictionary } from "@/internalization/app/dictionaries/panel/restaurant/salons/dictionary";
import { useHotkey } from "@tanstack/react-hotkeys";
import { useShortcutsContext } from "@/app/[lang]/(panel)/services/shortcuts/shortcutsContext";
import SalonsWrapper from "../../components/SalonsWrapper";

export default function SalonsControlProvider({
  dic,
}: {
  dic: SalonsDictionary;
}) {
  const { onGetShortcutKeys } = useShortcutsContext();
  const [showEditSalon, setEditSalon] = useState(false);

  function handleToggleEditSalon(state: boolean, id: number | null) {
    setEditSalon(state);
  }

  // shortcuts
  useHotkey(onGetShortcutKeys("general", "addingItem"), () => {
    handleToggleEditSalon(true, null);
  });

  const ctx: SalonsControlContextProps = {
    title: "salonsControlContext",
    dic,
    editSalon: {
      open: showEditSalon,
      onToggle: handleToggleEditSalon,
    },
  };
  return (
    <SalonsControlContext.Provider value={ctx}>
      <SalonsWrapper />
    </SalonsControlContext.Provider>
  );
}
