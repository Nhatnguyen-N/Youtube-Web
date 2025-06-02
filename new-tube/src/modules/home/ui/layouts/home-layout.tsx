import { SidebarProvider } from "@/components/ui/sidebar";
import { HomeNavBar } from "@/modules/home/ui/components/home-navbar";
interface HomeLayoutProps {
  children: React.ReactNode;
}
const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <SidebarProvider>
      <div className="">
        <HomeNavBar />
        <div>{children}</div>
      </div>
    </SidebarProvider>
  );
};
export default HomeLayout;
