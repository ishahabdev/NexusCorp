"use client";
import { Download, Plus } from "lucide-react"
import Link from "next/link";
import Button from "@/components/ui/Button"
import DashboardUsersCharts from "@/components/dashboardcomponents/charts/DashboardUsersCharts";
import DashboardSessionChart from "@/components/dashboardcomponents/charts/DashboardSessionChart"
import DashboardRevenueCharts from "@/components/dashboardcomponents/charts/DashboardRevenueCharts"
import DashboardGrowthCharts from "@/components/dashboardcomponents/charts/DashboardGrowthCharts"
import DashboardPerformaceCharts from "@/components/dashboardcomponents/charts/DashboardPerformaceCharts"
import { FaCloudArrowUp } from "react-icons/fa6";
import { FiAlertTriangle } from "react-icons/fi";
import { LuShieldCheck } from "react-icons/lu";

import { useState } from "react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"


export default function DashboardPage() {

  const Activity = [
    {
      icon: FaCloudArrowUp,
      title: "API Key Regenerated",
      time: "2 mins ago • Production",
      text: "text-blue-600",
    },
    {
      icon: FiAlertTriangle,
      title: "Rate limit exceeded",
      time: "15 mins ago • User #882",
      text: "text-amber-700",
    },
    {
      icon: LuShieldCheck,
      title: "New admin verified",
      time: "1 hour ago • Security",
      text: "text-green-900",
    },
  ];

  const [open, setOpen] = useState(false)

  return (
    <section className="w-full max-w-full  bg-[#f7f9fb]">
      <div className="p-4 sm:p-6">
        <h1 className="text-2xl sm:text-4xl font-bold">Welcome back, Nexus</h1>
        

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
          <p className="text-sm py-2 font-normal text-gray-700">
            Here is what &apos;s happening with your projects today.
          </p>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              className="flex-1 sm:flex-none flex items-center justify-center gap-1 text-gray-700 text-xs h-7 whitespace-nowrap sm:text-sm sm:h-8"
            >
              <Download className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              Export Report
            </Button>

            <Button
              size="sm"
              className="flex-1 sm:flex-none flex items-center justify-center gap-1 font-normal text-xs h-7 whitespace-nowrap sm:text-sm sm:h-8"
            >
              <Plus className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              New Project
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 p-4 sm:p-6 w-full">
        <DashboardUsersCharts />
        <DashboardRevenueCharts />
        <DashboardSessionChart />
        <DashboardGrowthCharts />
      </div>

      {/* --------------------------------------Performance charts ------------------------------------------------- */}
      <div className="flex flex-col lg:flex-row gap-4 p-4  w-full">
  <div className="w-full lg:basis-2/3 min-w-0 bg-gray-200 rounded-xl overflow-hidden">
    <DashboardPerformaceCharts />
  </div>

  <div className="w-full lg:basis-1/3 min-w-0 shrink-0 bg-white border-2 flex flex-col rounded-xl p-6">
    <h2 className="font-semibold mb-2">Recent Activity</h2>

    <div className="flex-1 overflow-y-auto">
      {Activity.map((item, index) => (
        <div className="flex items-center gap-4 h-14" key={index}>
          <div className="w-8 h-8 flex items-center justify-center rounded-full shrink-0 bg-gray-300">
            <item.icon className={`w-4 h-4 ${item.text}`} />
          </div>
          <div>
            <p className="text-sm">{item.title}</p>
            <p className="text-xs text-gray-800">{item.time}</p>
          </div>
        </div>
      ))}

      <Collapsible open={open} onOpenChange={setOpen}>
        {!open && (
          <CollapsibleTrigger className="w-full text-center  text-blue-700 text-xs">
            View All Activity
          </CollapsibleTrigger>
        )}

        <CollapsibleContent>
          {Activity.map((item, index) => (
            <div className="flex items-center gap-4 h-14 " key={index}>
              <div className="w-8 h-8 flex items-center justify-center rounded-full shrink-0 bg-gray-300">
                <item.icon className={`w-4 h-4 ${item.text}`} />
              </div>
              <div>
                <p className="text-sm">{item.title}</p>
                <p className="text-xs text-gray-800">{item.time}</p>
              </div>
            </div>
          ))}
        </CollapsibleContent>
        {open && (
          <CollapsibleTrigger className="w-full text-center text-blue-700 text-xs mt-2">
            Hide Activity
          </CollapsibleTrigger>
        )}
      </Collapsible>
    </div>
  </div>
</div>
      <footer className="text-xs bg-white border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 p-4 sm:p-8">
        <p>© 2024 NexusCorp. All rights reserved.</p>
        <div className="flex gap-4 sm:gap-6">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-service">Terms of Service</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </footer>

    </section>
  )
}