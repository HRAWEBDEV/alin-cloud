import {
  defaultPanelSettings,
  type PanelSettings,
} from "../settingsContext";

const panelSettingsKey = "panel-settings";

function getPanelSettings(): PanelSettings {
  const savedItem = localStorage.getItem(panelSettingsKey);
  if (!savedItem) return defaultPanelSettings;
  try {
    const parsedItem = JSON.parse(savedItem) as Partial<PanelSettings>;
    return { ...defaultPanelSettings, ...parsedItem };
  } catch {
    return defaultPanelSettings;
  }
}

function savePanelSettings(newPanelSettings: PanelSettings): void {
  localStorage.setItem(panelSettingsKey, JSON.stringify(newPanelSettings));
}

export { panelSettingsKey, getPanelSettings, savePanelSettings };
