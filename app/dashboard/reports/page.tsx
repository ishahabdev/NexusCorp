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
        <section>
            <div className="flex justify-between p-4">
                <div className="flex gap-2">
                    <DropdownMenu>
                        <DropdownMenuTrigger className="flex gap-1 w-36 text-xs items-center text-center" render={<Button variant="transparent"><span>All Channels</span> <FaCaretDown /></Button>} />
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
                        <DropdownMenuTrigger className="flex gap-1 w-36 text-xs  items-center text-center" render={<Button variant="transparent"><span>Device : All</span> <FaCaretDown /></Button>} />
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
                    <Button className="flex gap-1 w-42 text-xs " >Export Reports <Download className="h-4 w-4" /></Button>
                </div>
            </div>



            <div className="flex justify-between  p-8">
                <DashboardTrafficCharts />
                <DashboardTrafficChart2 />
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
    <div className="m-8 py-4 border bg-white   rounded-xl    ">    
        <div className="flex justify-between text-center p-4"> 
            <h1 className=" text-xl font-semibold ">Top Landing Pages</h1>  
            <p className="text-blue-700 text-xs">View All</p>
            
            
            
            
            
            </div>      
    <table className="w-full text-sm  ">
      <thead className="bg-gray-200  rounded-xl">
        <tr className="border-b text-left ">
          <th className=" font-medium text-xs text-gray-800 p-6 ">Page URL</th>
          <th className=" font-medium text-xs text-gray-800 p-6">Visitors</th>
          <th className=" font-medium text-xs text-gray-800 p-6">Conversion Rate</th>
          <th className=" font-medium text-xs text-gray-800 p-6">Trend</th>
        </tr>
      </thead>
      <tbody>
        {pageStats.map((page, index) => (
          <tr key={index} className="border-b border-gray-400 last:border-0">
            <td className="text-blue-600 p-4">{page.url}</td>
            <td className="p-4">{page.visitors}</td>
            <td className="p-4">{page.conversionRate}</td>
            <td className="p-4">{page.icon && <page.icon className="h-4 w-4 text-blue-900" />} </td>
          </tr>
        ))}
      </tbody>
    </table>
</div>



  <Footer />


        </section>
    )
}