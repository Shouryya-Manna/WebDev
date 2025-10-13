import AppLeftSidebar from "./AppLeftSideBar";
import AppRightSidebar from "./AppRightSidebar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "./ui/sidebar";

function LayoutRight({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SidebarProvider defaultOpen={false}>
        <SidebarTrigger />
        <main>{children}</main>
        <AppRightSidebar />
      </SidebarProvider>
    </>
  );
}

export default LayoutRight;
