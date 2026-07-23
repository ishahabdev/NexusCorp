"use client"
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
import Button from "@/components/ui/Button"
import { Bell, ChevronRight, CircleQuestionMark } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import {
    Avatar,
    AvatarBadge,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function DashboardNavbar() {
    const pathname = usePathname()
    const router = useRouter()
    const getPageLabel = () => {
        if (pathname === "/dashboard") return "Overview"
        if (pathname === "/dashboard/reports") return "Analytics"
        if (pathname === "/dashboard/settings") return "Settings"
        if (pathname === "/dashboard/users") return "Users"
        return "Overview"
    }

    return (
        <section className="flex border p-2 items-center text-center justify-between  ">
            <div  className="flex justify-between items-center text-center gap-6">
                <SidebarTrigger />

                <DropdownMenu>
                    <DropdownMenuTrigger>

                        <span className="flex gap-2 font-semibold"> Dashboard <ChevronRight className="h-4 w-4 text-gray-600" />    <span className="font-normal text-gray-700">{getPageLabel()}</span></span>

                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuGroup>
                            <DropdownMenuItem onClick={() => router.push("/dashboard")}>Overview</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => router.push("/dashboard/reports")}>Analytics</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => router.push("/dashboard/settings")}>Settings</DropdownMenuItem>
                            <DropdownMenuItem onClick={() => router.push("/dashboard/users")}>User</DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
                </div>

                <div className="flex justify-between items-center text-center gap-6 text-gray-600 px-6">
                    <Bell />
                    <CircleQuestionMark />
                    <Avatar>
                        <AvatarImage src="/images/Avatar.jpg" alt="@shadcn" />
                        <AvatarFallback className="bg-blue-600 font-bold text-white" >JD</AvatarFallback>
                    </Avatar>

                
            </div>
        </section>
    )
}