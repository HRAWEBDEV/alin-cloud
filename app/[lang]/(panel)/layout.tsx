import SidebarProvider from "../../[lang]/(panel)/services/side-bar/SidebarProvider";
import AppSidebar from "../../[lang]/(panel)/services/side-bar/components/AppSidebar";
import { SidebarInset } from "../../[lang]/(panel)/services/side-bar/components/Sidebar";
import Header from "./components/header/Header";
import MainWrapper from "./components/main/MainWrapper";
import ProfileProvider from "../../[lang]/(panel)/services/profile/ProfileProvider";
import TabsNav from "./components/tabs/TabsNav";
import SettingsProvider from "./services/settings/SettingsProvider";
import SettingsModal from "./services/settings/components/SettingsModal";
import HistoryProivder from "./services/history/HistoryProvider";
import ShortcutsProvider from "./services/shortcuts/ShortcutsProvider";
import HistoryTabs from "./services/history/components/HistoryTabs";
import HelpProvider from "./help/services/HelpProvider";

export default function PanelLayout({ children }: LayoutProps<"/[lang]">) {
  return (
    <ShortcutsProvider>
      <SidebarProvider>
        <ProfileProvider>
          <HelpProvider>
            <SettingsProvider>
              <HistoryProivder>
                <AppSidebar />
                <SidebarInset>
                  <Header />
                  <HistoryTabs />
                  <MainWrapper>{children}</MainWrapper>
                  <TabsNav />
                  <SettingsModal />
                </SidebarInset>
              </HistoryProivder>
            </SettingsProvider>
          </HelpProvider>
        </ProfileProvider>
      </SidebarProvider>
    </ShortcutsProvider>
  );
}
