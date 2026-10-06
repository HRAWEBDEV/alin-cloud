const viewOptions = ["normal", "minimal"] as const;

interface RackSettings {
  ltrTablesDirection: boolean;
  viewOption: (typeof viewOptions)[number];
  contrastModeOn: boolean;
}

const defaultRackSettings: RackSettings = {
  ltrTablesDirection: false,
  viewOption: "normal",
  contrastModeOn: false,
};

const rackSettingsKey = "rack-settings";

function saveRackSettings(setting: RackSettings) {
  localStorage.setItem(rackSettingsKey, JSON.stringify(setting));
}

function getRackSettings() {
  const val = localStorage.getItem(rackSettingsKey);
  if (!val) return defaultRackSettings;
  return { ...defaultRackSettings, ...JSON.parse(val) };
}

export type { RackSettings };
export {
  defaultRackSettings,
  rackSettingsKey,
  viewOptions,
  saveRackSettings,
  getRackSettings,
};
