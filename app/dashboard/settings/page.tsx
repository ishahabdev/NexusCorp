"use client"
import { useState } from "react"
import SettingSidebar from "@/components/dashboardcomponents/SettingComponents/SettingSidebar"
import SettingProfile from "@/components/dashboardcomponents/SettingComponents/SettingProfile"
import SettingSecurity from "@/components/dashboardcomponents/SettingComponents/SettingSecurity"
import SettingNotification from "@/components/dashboardcomponents/SettingComponents/SettingNotification"
export type SettingTab = "profile" | "notification" | "security"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<SettingTab>("profile")

  return (
    <div className="flex">
      <SettingSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex-1 p-6">
        {activeTab === "profile" && <SettingProfile />}
        {activeTab === "notification" && <SettingNotification />}
        {activeTab === "security" && <SettingSecurity />}
      </div>
    </div>
  )
}