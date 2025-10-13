import AppLeftSidebar from "./AppLeftSideBar";
import { SidebarProvider, SidebarTrigger } from "./ui/sidebar";

function LayoutLeft({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SidebarProvider defaultOpen={false}>
        <AppLeftSidebar />
        <SidebarTrigger />
        <main>{children}</main>
      </SidebarProvider>
    </>
  );
}

export default LayoutLeft;
