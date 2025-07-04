import { SidebarProvider } from "@/components/ui/sidebar";
import { StudioSidebar } from "../components/studio-sidebar";
import { StudioNavBar } from "../components/studio-navbar";
interface StudioLayoutProps {
  children: React.ReactNode;
}
const StudioLayout = ({ children }: StudioLayoutProps) => {
  return (
    <SidebarProvider>
      <div className="w-full">
        <StudioNavBar />
        <div className="flex min-h-screen pt-[4rem]">
          <StudioSidebar />
          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
};
export default StudioLayout;
