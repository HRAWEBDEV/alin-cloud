"use client";
import { useState, ReactNode, useEffect } from "react";
import {
  type SettingsContextProps,
  type PanelSettings,
  SettingsContext,
  defaultPanelSettings,
} from "./settingsContext";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useShareDictionary } from "@/services/share-dictionary/shareDictionaryContext";
import { IoIosWarning } from "react-icons/io";
import { useLogout } from "../../hooks/useLogout";
import { type SettingItem } from "./utils/settingItems";
import {
  getPanelSettings,
  savePanelSettings,
} from "./utils/panelSettingsManager";
import { useShortcutsContext } from "../shortcuts/shortcutsContext";
import { useHotkey } from "@tanstack/react-hotkeys";

export default function SettingsProvider({
  children,
}: {
  children: ReactNode;
}) {
  const { onGetShortcutKeys } = useShortcutsContext();
  const [activeTab, setActiveTab] = useState<SettingItem>("userInfo");
  const logout = useLogout();
  const {
    shareDictionary: {
      components: { settings: dic },
    },
  } = useShareDictionary();
  const [open, setOpen] = useState(false);
  const [settingsLoaded, setSettingsLoaded] = useState(false);
  const [showConfirmLogout, setShowConfirmlogout] = useState(false);
  const [panelSettings, setPanelSettings] = useState<PanelSettings>(
    () => defaultPanelSettings,
  );

  function handleChangeSettings<K extends keyof PanelSettings>(
    key: K,
    option: PanelSettings[K],
  ) {
    const newPanelSettings = { ...panelSettings, [key]: option };
    setPanelSettings(newPanelSettings);
    savePanelSettings(newPanelSettings);
  }

  function onToggle(state?: boolean, tab?: SettingItem) {
    const newState = state === undefined ? !open : state;
    if (newState) {
      setActiveTab(tab || "userInfo");
    }
    setOpen(newState);
  }
  // shortcuts
  useHotkey(onGetShortcutKeys("general", "toggleShortcuts"), () => {
    onToggle(true, "shortcuts");
  });
  useHotkey(onGetShortcutKeys("general", "toggleSettings"), () => {
    onToggle(true, "userInterface");
  });
  useHotkey(onGetShortcutKeys("general", "toggleHelp"), () => {
    onToggle(true, "help");
  });

  const ctx: SettingsContextProps = {
    open,
    showConfirmLogout,
    activeTab,
    setShowConfirmlogout,
    toggleOpen: onToggle,
    panelSettings,
    handleChangeSettings,
  };

  useEffect(() => {
    setPanelSettings(getPanelSettings());
    setSettingsLoaded(true);
  }, []);

  if (!settingsLoaded) return null;
  return (
    <SettingsContext.Provider value={ctx}>
      {children}
      <AlertDialog
        open={showConfirmLogout}
        onOpenChange={(state) => setShowConfirmlogout(state)}
      >
        <AlertDialogContent size="sm">
          <AlertDialogHeader>
            <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
              <IoIosWarning />
            </AlertDialogMedia>
            <AlertDialogTitle>{dic.logoutConfirmMessage}</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel variant="outline">
              {dic.cancel}
            </AlertDialogCancel>
            <AlertDialogAction variant="destructive" onClick={() => logout()}>
              {dic.confirm}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </SettingsContext.Provider>
  );
}
