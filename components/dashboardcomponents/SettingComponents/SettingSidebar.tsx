"use client"

import { cn } from "@/lib/utils"
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"

import { FaUser } from "react-icons/fa"
import { MdOutlineShield } from "react-icons/md"
import { AiFillNotification } from "react-icons/ai"
import { SettingTab } from "@/app/dashboard/settings/page"

interface SettingSidebarProps {
  activeTab: SettingTab
  setActiveTab: (tab: SettingTab) => void
}

export default function SettingSidebar({
  activeTab,
  setActiveTab,
}: SettingSidebarProps) {

  return (
    <section className="w-48 border rounded-lg self-start">

      <SidebarMenu className="gap-1 p-0">

        {/* Profile */}
        <SidebarMenuItem>
          <SidebarMenuButton
            onClick={() => setActiveTab("profile")}
            isActive={activeTab === "profile"}
            className={cn(
              "h-12 rounded-none px-4",
              activeTab === "profile" && "text-blue-600"
            )}
          >
            <FaUser
              className={cn(
                "h-5 w-5",
                activeTab === "profile"
                  ? "text-blue-600"
                  : "text-gray-700"
              )}
            />

            <span
              className={cn(
                "text-base",
                activeTab === "profile"
                  ? "text-blue-600 font-medium"
                  : "text-gray-700"
              )}
            >
              Profile
            </span>

          </SidebarMenuButton>
        </SidebarMenuItem>


        {/* Security */}
        <SidebarMenuItem>
          <SidebarMenuButton
            onClick={() => setActiveTab("security")}
            isActive={activeTab === "security"}
            className={cn(
              "h-12 rounded-none px-4",
              activeTab === "security" && "text-blue-600"
            )}
          >
            <MdOutlineShield
              className={cn(
                "h-6 w-6",
                activeTab === "security"
                  ? "text-blue-600"
                  : "text-gray-700"
              )}
            />

            <span
              className={cn(
                "text-base",
                activeTab === "security"
                  ? "text-blue-600 font-medium"
                  : "text-gray-700"
              )}
            >
              Security
            </span>

          </SidebarMenuButton>
        </SidebarMenuItem>


        {/* Notifications */}
        <SidebarMenuItem>
          <SidebarMenuButton
            onClick={() => setActiveTab("notification")}
            isActive={activeTab === "notification"}
            className={cn(
              "h-12 rounded-none px-4",
              activeTab === "notification" && "text-blue-600"
            )}
          >
            <AiFillNotification
              className={cn(
                "h-6 w-6",
                activeTab === "notification"
                  ? "text-blue-600"
                  : "text-gray-700"
              )}
            />

            <span
              className={cn(
                "text-base",
                activeTab === "notification"
                  ? "text-blue-600 font-medium"
                  : "text-gray-700"
              )}
            >
              Notifications
            </span>

          </SidebarMenuButton>
        </SidebarMenuItem>


      </SidebarMenu>

    </section>
  )
}