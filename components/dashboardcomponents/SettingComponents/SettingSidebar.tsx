"use client"
import { cn } from "@/lib/utils"
import {
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
} from "@/components/ui/sidebar";
import { FaUser } from "react-icons/fa";
import { MdOutlineShield } from "react-icons/md";
import { AiFillNotification } from "react-icons/ai";
interface SettingSidebarProps {
    activeTab: SettingTab;
    setActiveTab: (tab: SettingTab) => void;
}

export default function SettingSidebar({ activeTab, setActiveTab }: SettingSidebarProps) {
    return (
        <section className="h-100 w-40 border mt-10">
            <SidebarMenu className="gap-2">

                {/* -------------------------------PROFILE BUTTON----------------------------------------- */}
                <SidebarMenuItem>
                    <SidebarMenuButton
                        onClick={() => setActiveTab("profile")}
                        isActive={activeTab === "profile"}
                        className={cn(
                            "h-12 py-3 rounded-none",
                            activeTab === "profile" &&
                            "text-blue-600 "
                        )}
                    >
                        <FaUser
                            className={cn(
                                "h-7 w-7",
                                activeTab === "profile" && "text-blue-600"
                            )}
                        />
                        <span
                            className={cn(
                                "text-base",
                                activeTab === "profile" && "text-blue-600 font-medium"
                            )}
                        >
                            Profile
                        </span>
                    </SidebarMenuButton>
                </SidebarMenuItem>

                {/* -------------------------------SECURITY BUTTON----------------------------------------- */}
                <SidebarMenuItem>
                    <SidebarMenuButton
                        onClick={() => setActiveTab("security")}
                        isActive={activeTab === "security"}
                        className={cn(
                            "h-12 py-3 rounded-none",
                            activeTab === "security" &&
                            "text-blue-600 "
                        )}
                    >
                        <MdOutlineShield
                            className={cn(
                                "h-7 w-7 text-gray-700",
                                activeTab === "security" && "text-blue-600"
                            )}
                        />
                        <span
                            className={cn(
                                "text-base text-gray-700",
                                activeTab === "security" && "text-blue-600 font-medium"
                            )}
                        >
                            Security
                        </span>
                    </SidebarMenuButton>
                </SidebarMenuItem>

                {/* -------------------------------NOTIFICATIONS BUTTON------------------------------------------- */}
                <SidebarMenuItem>
                    <SidebarMenuButton
                        onClick={() => setActiveTab("notification")}
                        isActive={activeTab === "notification"}
                        className={cn(
                            "h-12 py-3 rounded-none",
                            activeTab === "notification" &&
                            "text-blue-600 "
                        )}
                    >
                        <AiFillNotification
                            className={cn(
                                "h-7 w-7 text-gray-700",
                                activeTab === "notification" && "text-blue-600"
                            )}
                        />
                        <span
                            className={cn(
                                "text-base text-gray-700",
                                activeTab === "notification" && "text-blue-600 font-medium"
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