"use client"

import Button from "@/components/ui/Button"
import Footer from "@/components/shared/Footer"
import DashboardTrafficCharts from "@/components/dashboardcomponents/charts/DashboardTrafficCharts"
import DashboardTrafficChart2 from "@/components/dashboardcomponents/charts/DashboardTrafficChart2"
import { Progress } from "@/components/ui/progress"
import {
    DropdownMenu,
    DropdownMenuItem,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IoTrendingUp } from "react-icons/io5";
import { Download } from "lucide-react"
import { FaCaretDown } from "react-icons/fa";
export default function DashboardReports() {
  const stats = [
  { label: "Bounce Rate", value: "24.8%", change: "+2.1%", positive: true, progress: 25 },
  { label: "Avg. Session", value: "04:12", change: "-0.4%", positive: true, progress: 50 },
  { label: "Goal Completion", value: "12.5k", change: "+14%", positive: true, progress: 70 },
  { label: "Page Views", value: "892k", change: "+8%", positive: false, progress: 85 },
]
const pageStats = [
  {
    url: "/dashboard/analytics",
    visitors: "45,200",
    conversionRate: "4.2%",
    icon:IoTrendingUp
  },
  {
    url: "/solutions/enterprise",
    visitors: "38,120",
    conversionRate: "5.8%",
    icon:IoTrendingUp
  },
  {
    url: "/blog/modern-ui-trends",
    visitors: "22,005",
    conversionRate: "1.1%",
    

  },
]

    return (
        <section className="bg-[#F7F9FB]">
            <div className="flex justify-between p-6">
                <div className="flex gap-2">
                    <DropdownMenu>
                        <DropdownMenuTrigger className="flex gap-1 w-36 text-xs items-center text-center" render={<Button variant="outline" className="text-black "><span>All Channels</span> <FaCaretDown /></Button>} />
                        <DropdownMenuContent className="w-40">
                            <DropdownMenuGroup>
                                <DropdownMenuItem

                                >
                                    Status Bar
                                </DropdownMenuItem>
                                <DropdownMenuItem

                                >
                                    Activity Bar
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                >
                                    Panel
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <DropdownMenu>
                        <DropdownMenuTrigger className="flex gap-1 w-36 text-xs  items-center text-center" render={<Button variant="outline"className="text-black "><span>Device : All</span> <FaCaretDown /></Button>} />
                        <DropdownMenuContent className="w-40">
                            <DropdownMenuGroup>
                                <DropdownMenuItem

                                >
                                    Mobile
                                </DropdownMenuItem>
                                <DropdownMenuItem

                                >
                                    Disktop
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                >
                                    Panel
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>

                </div>
                <div>
                    <Button className="flex gap-1 w-42 text-xs "  > <Download className="h-4 w-4" /> Export Reports </Button>
                </div>
            </div>
       <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 w-full p-6 items-stretch">
  <div className="min-w-0 md:col-span-7 lg:col-span-8">
  <DashboardTrafficCharts />
</div>
<div className="min-w-0 md:col-span-5 lg:col-span-4">
  <DashboardTrafficChart2 />
</div>
</div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-6">
  {stats.map((stat, index) => (
    <div key={index} className="bg-white border rounded-md p-4">
      <p className="text-xs text-gray-800 mb-2">{stat.label}</p>
      <div className="flex items-baseline gap-1.5 mb-2">
        <p className="text-xl font-medium">{stat.value}</p>
        <p className={`text-xs ${stat.positive ? "text-green-600" : "text-red-600"}`}>
          {stat.change}
        </p>
      </div>
     <Progress
  value={stat.progress}
  className="w-full"
  indicatorClassName={index === 0 ? "bg-red-600" : "bg-blue-800"}
/>
    </div>
  ))}
</div>
   <div className="m-4 sm:m-6 lg:m-8 py-4 border bg-white rounded-xl">
  <div className="flex justify-between items-center text-center p-4">
    <h1 className="text-base sm:text-lg lg:text-xl font-semibold">
      Top Landing Pages
    </h1>
    <p className="text-blue-700 text-xs cursor-pointer">View All</p>
  </div>

  <div className="overflow-x-auto">
    <table className="w-full text-sm min-w-[600px]">
      <thead className="bg-gray-200 rounded-xl">
        <tr className="border-b text-left">
          <th className="font-medium text-xs text-gray-800 p-3 sm:p-4 lg:p-6">
            Page URL
          </th>
          <th className="font-medium text-xs text-gray-800 p-3 sm:p-4 lg:p-6">
            Visitors
          </th>
          <th className="font-medium text-xs text-gray-800 p-3 sm:p-4 lg:p-6">
            Conversion Rate
          </th>
          <th className="font-medium text-xs text-gray-800 p-3 sm:p-4 lg:p-6">
            Trend
          </th>
        </tr>
      </thead>
      <tbody>
        {pageStats.map((page, index) => (
          <tr key={index} className="border-b border-gray-400 last:border-0">
            <td className="text-blue-600 p-3 sm:p-4 whitespace-nowrap">
              {page.url}
            </td>
            <td className="p-3 sm:p-4 whitespace-nowrap">{page.visitors}</td>
            <td className="p-3 sm:p-4 whitespace-nowrap">
              {page.conversionRate}
            </td>
            <td className="p-3 sm:p-4">
              {page.icon && (
                <page.icon className="h-4 w-4 text-blue-900" />
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>


  <Footer />


        </section>
    )
}