import { type RegisterableHotkey } from "@tanstack/react-hotkeys";

type ShortcutsSetup = typeof defaultShortcuts;
type ShortcutsCategory = keyof ShortcutsSetup;
type ShortcutsItem<T extends ShortcutsCategory> = keyof ShortcutsSetup[T];

const defaultShortcuts = {
  static: {
    static: {
      keys: "" as RegisterableHotkey,
    },
  },
  general: {
    toggleNavigation: {
      keys: "Control+B" as RegisterableHotkey,
    },
    toggleSettings: {
      keys: "Control+," as RegisterableHotkey,
    },
    toggleShortcuts: {
      keys: "Shift+\/" as RegisterableHotkey,
    },
    toggleHelp: {
      keys: "F1" as RegisterableHotkey,
    },
    globalSearch: {
      keys: "Control+\/" as RegisterableHotkey,
    },
  },
  tables: {
    addingItem: {
      keys: "C" as RegisterableHotkey,
    },
  },
  salons: {
    addingItem: {
      keys: "C" as RegisterableHotkey,
    },
  },
} as const;

export type { ShortcutsSetup, ShortcutsCategory, ShortcutsItem };
export { defaultShortcuts };
