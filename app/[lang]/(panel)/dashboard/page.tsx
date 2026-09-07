import SidebarProvider from "../../../[lang]/(panel)/services/side-bar/SidebarProvider";
import AppSidebar from "../../../[lang]/(panel)/services/side-bar/components/AppSidebar";
import { SidebarInset } from "../../../[lang]/(panel)/services/side-bar/components/Sidebar";
import Header from "../components/header/Header";
import MainWrapper from "../components/main/MainWrapper";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header />
        <MainWrapper>test</MainWrapper>
      </SidebarInset>
    </SidebarProvider>
  );
}
