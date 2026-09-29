"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useSettingsContext } from "../settingsContext";
import { useShareDictionary } from "@/services/share-dictionary/shareDictionaryContext";
import { Button } from "@/components/ui/button";
import { settingItems } from "../utils/settingItems";
import { getSettingsIcon } from "../utils/getSettingsIcon";
import UserInterfaceSettings from "../../userInterface/components/UserInterfaceSettings";
import ShortcutsWrapper from "../../shortcuts/components/ShortcutsWrapper";
import UserInfo from "../../../users/components/user-info/UserInfo";
import OrganizationInfo from "../../../organization/components/organization-info/OrganizationInfo";

export default function SettingsModal() {
  const { open, activeTab, toggleOpen, setShowConfirmlogout } =
    useSettingsContext();
  const {
    shareDictionary: {
      components: { settings: dic },
    },
  } = useShareDictionary();

  function renderContent() {
    switch (activeTab) {
      case "userInfo":
        return <UserInfo />;
      case "organizationInfo":
        return <OrganizationInfo />;
      case "userInterface":
        return <UserInterfaceSettings />;
      case "shortcuts":
        return <ShortcutsWrapper />;
      default:
        return null;
    }
  }

  return (
    <Dialog open={open} onOpenChange={(state) => toggleOpen(state)}>
      <DialogContent className="p-0 gap-0 w-full h-full max-sm:rounded-none max-sm:max-w-none sm:max-w-2xl sm:h-[85dvh] sm:max-h-160 flex flex-col overflow-hidden">
        <DialogHeader className="border-b border-border p-4">
          <DialogTitle>{dic.title}</DialogTitle>
          <DialogDescription className="hidden">{dic.title}</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col sm:grid sm:grid-cols-[11rem_1fr] grow overflow-hidden">
          <div className="bg-neutral-100 dark:bg-neutral-800 overflow-auto flex sm:flex-col shrink-0">
            {settingItems.map((item) => {
              const isActive = item.key === activeTab;
              return (
                <Button
                  variant="ghost"
                  key={item.key}
                  data-active={isActive}
                  data-logout={item.key === "logout"}
                  className="text-start justify-stretch rounded-none font-normal text-neutral-700 dark:text-neutral-400 data-[logout='true']:text-destructive data-[active='true']:bg-primary! data-[active='true']:text-primary-foreground h-11 gap-3"
                  onClick={() => {
                    if (item.key === "logout") {
                      setShowConfirmlogout(true);
                      return;
                    }
                    toggleOpen(true, item.key);
                  }}
                >
                  {getSettingsIcon(item.key, { className: "size-5" })}
                  <span>{dic[item.key]}</span>
                </Button>
              );
            })}
          </div>
          <div className="overflow-auto grow relative">{renderContent()}</div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
