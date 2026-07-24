"use client"
import { useState } from "react"
import Footer from "@/components/shared/Footer"
import SettingSidebar from "@/components/dashboardcomponents/SettingComponents/SettingSidebar"
import SettingProfile from "@/components/dashboardcomponents/SettingComponents/SettingProfile"
import SettingSecurity from "@/components/dashboardcomponents/SettingComponents/SettingSecurity"
import SettingNotification from "@/components/dashboardcomponents/SettingComponents/SettingNotification"

export type SettingTab = "profile" | "notification" | "security"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<SettingTab>("profile")

  return (
    <div className="bg-[#F7F9FB]">
      <h1 className="text-2xl sm:text-3xl font-bold px-4 sm:px-6 lg:px-8 py-4">
        Account Settings
      </h1>
      <p className="px-4 sm:px-6 lg:px-8 text-gray-600 text-sm sm:text-base">
        Manage your account preferences, security credentials, and communication settings.
      </p>

      <div className="flex flex-col lg:flex-row gap-6 p-4 sm:p-6">
        <SettingSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="flex-1 min-w-0 lg:px-4">
          {activeTab === "profile" && <SettingProfile />}
          {activeTab === "notification" && <SettingNotification />}
          {activeTab === "security" && <SettingSecurity />}
        </div>
      </div>

      <Footer />
    </div>
  )
}