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
    <div className="bg-[#F7F9FB] ">
        <h1 className="text-3xl font-bold px-8 py-4">Account Settings</h1>
        <p className="px-8 text-gray-600">Manage your account preferences, security credentials, and communication settings.</p>
    <div className="flex p-6 ">
      
      <SettingSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex-1 px-10 ">
        {activeTab === "profile" && <SettingProfile />}
        {activeTab === "notification" && <SettingNotification />}
        {activeTab === "security" && <SettingSecurity />}
      </div>
    </div>
    
      <Footer />

    </div>
  )
}