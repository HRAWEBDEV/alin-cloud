"use client";
import { useShareDictionary } from "@/services/share-dictionary/shareDictionaryContext";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTheme } from "next-themes";
import { useBaseConfig } from "@/services/base-config/baseConfigContext";
import { appColorTemplates } from "@/utils/colorPalletes";
import { headerBgColors } from "../../settings/settingsContext";
import { useSettingsContext } from "../../settings/settingsContext";

export default function UserInterfaceSettings() {
  const {
    panelSettings: { headerBgColor },
    handleChangeSettings,
  } = useSettingsContext();
  const {
    shareDictionary: {
      components: { modeController: modeDic, userInterface: dic },
    },
  } = useShareDictionary();
  const { onChangeColorTemplate } = useBaseConfig();
  const { theme, setTheme } = useTheme();
  return (
    <div className="p-4">
      <div className="mb-6 flex flex-wrap gap-4 items-center">
        <div>
          <h3 className="font-medium">{modeDic.title}</h3>
        </div>
        <Tabs
          value={theme || "light"}
          onValueChange={(value) => setTheme(value)}
        >
          <TabsList>
            <TabsTrigger className="w-24" value="light">
              {modeDic.light}
            </TabsTrigger>
            <TabsTrigger className="w-24" value="dark">
              {modeDic.dark}
            </TabsTrigger>
            <TabsTrigger className="w-24" value="system">
              {modeDic.system}
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div className="mb-4 flex flex-wrap gap-4 items-center">
        <div>
          <h3 className="font-medium">{dic.colorTemplates}</h3>
        </div>
        <ul className="flex gap-4 flex-wrap">
          {appColorTemplates.map((color) => (
            <li key={color}>
              <button
                className={`${color} size-9 bg-primary rounded cursor-pointer`}
                onClick={() => onChangeColorTemplate(color)}
              ></button>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-4 flex flex-col gap-4">
        <div>
          <h3 className="font-medium">{dic.panelHeaderBg.title}</h3>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          {headerBgColors.map((item) => {
            return (
              <div
                data-active={item === headerBgColor}
                key={item}
                className="group text-center"
              >
                <button
                  className="size-36 border border-border rounded-md flex flex-col cursor-pointer mb-2  group-data-[active='true']:border-2 group-data-[active='true']:border-primary overflow-hidden"
                  onClick={() => handleChangeSettings("headerBgColor", item)}
                >
                  <div
                    data-rich-color={item === "rich"}
                    className="h-6 border-b border-border data-[rich-color='true']:bg-primary"
                  ></div>
                </button>
                <p className="text-sm text-neutral-700 dark:text-neutral-400">
                  {dic["panelHeaderBg"][item]}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
