"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { PanelsTopLeft, Users2, } from "lucide-react"
import { IoAnalyticsOutline, IoSettings } from "react-icons/io5"
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { usePathname } from "next/navigation"

import { Separator } from '@/components/ui/separator';

import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

export default function DashboardSidebar() {
  const pathname = usePathname()
  return (
    <Sidebar >
      <SidebarHeader>
        <div className="grid gap-2 px-2 py-1.5">
          <span className="font-bold text-2xl">Project Alpha</span>
          <span className="font-md text-gray-600">Admin console</span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="gap-2 ">
              {/* -------------------------------OVERVIEW BUTTON----------------------------------------- */}
              <SidebarMenuItem>
                <SidebarMenuButton
                  render={<Link href="/dashboard" />}
                  isActive={pathname === "/dashboard"}
                  className={cn("h-12 py-3  ",
                    pathname === "/dashboard" && "text-blue-600 border-l-3 rounded-none  border-blue-600 ")} >
                  <PanelsTopLeft
                    className={cn(
                      "h-7 w-7 stroke-[2.5]",
                      pathname === "/dashboard" && "text-blue-600  font-medium "
                    )}
                  />
                  <span
                    className={cn(
                      "text-base",
                      pathname === "/dashboard" && "text-blue-600 font-medium "
                    )}
                  >
                    Overview
                  </span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              {/* -------------------------------ANALYTICS BUTTON----------------------------------------- */}
              <SidebarMenuItem>
                <SidebarMenuButton
                  render={<Link href="/dashboard/reports" />}

                  isActive={pathname === "/dashboard/reports"}
                  className={cn("h-12 py-3", pathname === "/dashboard/reports" && "border-l-3 rounded-none border-blue-600")}
                >
                 
                    <IoAnalyticsOutline
                      className={cn(
                        "h-7 w-7 font-bold text-gray-700",
                        pathname === "/dashboard/reports" && "text-blue-600"
                      )}
                    />
                    <span
                      className={cn(
                        "text-base text-gray-700",
                        pathname === "/dashboard/reports" && "text-blue-600 font-medium"
                      )}
                    >
                      Analytics
                    </span>
                
                </SidebarMenuButton>
              </SidebarMenuItem>
              {/* -------------------------------SETTINGS BUTTON------------------------------------------- */}
              <SidebarMenuItem>
                <SidebarMenuButton
                  render={<Link href="/dashboard/settings" />}
                  isActive={pathname === "/dashboard/settings"}
                  className={cn("h-12 py-3",
                    pathname === "/dashboard/settings" && "text-blue-600 border-l-3 border-blue-600 rounded-none")}>
                    <IoSettings className={cn("h-7 w-7 font-bold text-gray-700",
                      pathname === "/dashboard/settings" && "text-blue-600")} />
                    <span className={cn("text-base text-gray-700",
                      pathname === "/dashboard/settings" && "text-blue-600")}>
                      Settings</span>
                  

                </SidebarMenuButton>
              </SidebarMenuItem>
              {/* -------------------------------USERS BUTTON----------------------------------------- */}
              <SidebarMenuItem>
                <SidebarMenuButton
                  render={<Link href="/dashboard/users" />}
                  isActive={pathname === "/dashboard/users"}
                  className={cn("h-12 py-3",
                    pathname === "/dashboard/users" && "text-blue-600 rounded-none border-l-3 border-blue-600")}>

                  <Users2 className={cn("h-7 w-7 stroke-[2.5] text-gray-700",
                    pathname === "/dashboard/users" && "text-blue-600")} />
                  <span className={cn(" text-base text-gray-700",
                    pathname === "/dashboard/users" && "text-blue-600")}>Users</span>

                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      < Separator />

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              render={<Link href="/logout" />}
              className="h-12 py-3">
              <Avatar>
                <AvatarImage src="/images/Avatar.jpg" alt="@shadcn" />
                <AvatarFallback className="bg-blue-600 font-bold text-white" >JD</AvatarFallback>
              </Avatar>
              <div className="flex flex-col leading-tight">
                <span className="text-base font-medium">John Doe</span>
                <span className="text-xs text-gray-500">Admin Access</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}