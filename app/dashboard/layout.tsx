import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import DashboardSidebar from "@/components/dashboardcomponents/DashboardSidebar"
import DashboardNavbar from "@/components/dashboardcomponents/DashboardNavbar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <SidebarInset className="w-full min-w-0 overflow-x-hidden">
        <DashboardNavbar />
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}