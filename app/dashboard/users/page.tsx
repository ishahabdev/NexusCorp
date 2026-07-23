"use client"
import {
    Avatar,
    AvatarBadge,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import Link from "next/link";   
import Footer from "@/components/shared/Footer"
import { FaGlobeAmericas } from "react-icons/fa";
import { LuChartLine } from "react-icons/lu";
import { ShieldCheck, BarChart3 } from "lucide-react";
import SimpleTable from "@/components/dashboardcomponents/charts/table"
import * as React from "react"
import Button  from "@/components/ui/Button"
import { Progress } from "@/components/ui/progress"
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineDateRange } from "react-icons/md";
import { LuShieldCheck } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
export default function DashboardUsers() {
    const [value, setValue] = React.useState(95)
      
    return (
        <section className="bg-gray-50   ">
   <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:p-4 md:p-2 sm:p-2 items-start ">
  <div className="lg:col-span-2 flex flex-col sm:flex-row gap-6 p-4 sm:p-6 bg-white border-2 border-gray-200 rounded-xl min-h-74">
    <Avatar className="w-20 h-20 sm:w-28 sm:h-28 shrink-0">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>

    <div className="flex flex-col gap-2">
      <h1 className="text-lg sm:text-xl font-semibold flex flex-wrap items-center gap-2">
        Alex Rivera
        <span className="bg-blue-500 text-white text-xs rounded-md font-medium px-2 py-0.5">
          Senior Engineer
        </span>
      </h1>
      <p className="text-sm text-gray-600 lg:w-sm py-2">
        Leading the infrastructure migration at NexusCorp.
        Specializing in high-performance distributed systems
        and cloud architecture.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:gap-6  sm:gap-3 mt-2 text-sm text-gray-700">
        <span className="flex items-center gap-1.5">
          <HiOutlineMail className="text-blue-600 text-base shrink-0" /> alex.rivera@nexuscorp.io
        </span>
        <span className="flex items-center gap-1.5">
          <CiLocationOn className="text-blue-600 text-base shrink-0" strokeWidth={1.5} /> San Francisco, CA
        </span>
        <span className="flex items-center gap-1.5">
          <MdOutlineDateRange className="text-blue-600 text-base shrink-0" /> Joined Jan 2022
        </span>
        <span className="flex items-center gap-1.5">
          <LuShieldCheck className="text-blue-600 text-base shrink-0" /> ID: #RX-2940-A
        </span>
      </div>
    </div>
  </div>

  <div className="lg:col-span-1 bg-[#0050CB] text-white border rounded-xl p-4 sm:p-6">
    <h1 className="text-gray-300 text-sm">SYSTEM TRUST SCORE</h1>
    <h1 className="text-3xl sm:text-4xl font-semibold">
      98.4<span className="text-gray-300 text-xl sm:text-2xl">%</span>
    </h1>
    <Progress
      value={value}
      className="w-full py-4"
      indicatorClassName="bg-white"
    />
    <div className="flex  flex-col sm:grid sm:grid-cols-2 items-start sm:items-center gap-3">
      <div>
        <p className="text-gray-100 font-light text-xs">Uptime Contribution</p>
        <span className="text-lg sm:text-xl font-semibold text-white">1,240 hrs</span>
      </div>
      <Button
        variant="outline"
        size="sm"
        className="font-bold py-2 px-2 text-xs w-full sm:w-auto sm:justify-self-end"
      >
        View Full Report
      </Button>
    </div>
  </div>
</div>
            <div className="p-6 " >
            
            <SimpleTable/>
            </div>
           

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-10 p-4 sm:p-6">

  <div className="flex items-center gap-4 bg-gray-200 rounded-xl p-4 sm:p-6 border-2 border-gray-300 ">
    <div className="w-12 h-12 flex shrink-0 border border-gray-400 items-center justify-center bg-white rounded-sm">
      <ShieldCheck className="w-6 h-6 text-blue-600 bg-white" />
    </div>

    <div>
      <h1 className="font-semibold">Account Security</h1>
      <p className="text-gray-600 text-sm sm:text-base">
        Update permissions, reset password, and manage active sessions for this
        user.
      </p>
    </div>
  </div>

  <div className="flex items-center gap-4 bg-gray-200 rounded-xl p-4 sm:p-6 border-2 border-gray-300 ">
    <div className="w-12 h-12 flex shrink-0 border border-gray-400 items-center justify-center bg-white rounded-sm">
      <BarChart3 className="w-6 h-6 text-blue-600" />
    </div>

    <div>
      <h1 className="font-semibold">Compute Metrics</h1>
      <p className="text-gray-600 text-sm sm:text-base">
        Deep dive into CPU/RAM utilization and cost centers associated with
        Alex's workloads.
      </p>
    </div>
  </div>

</div>


<footer className="bg-white text-black border-t-2 border-gray-200  ">
  <div className="px-4 sm:px-6 lg:px-8 py-6 mb-14">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">

      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          NEXUSCORP
        </h2>
        <p className="text-sm text-gray-800">
          Advanced administrative controls and enterprise-grade
          infrastructure management for the modern web.
        </p>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-black mb-2">
          Quick Links
        </h3>
        <ul className="space-y-1 text-gray-700 text-sm">
          <li>
            <Link href="/privacy-policy" className="hover:text-blue-600 transition-colors">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/terms-of-service" className="hover:text-blue-600 transition-colors">
              Terms of Service
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex flex-col items-start md:items-end gap-2">
        <div className="flex gap-3 text-lg text-gray-800">
          <FaGlobeAmericas />
          <LuChartLine />
        </div>
        <p className="text-gray-600 text-sm text-left md:text-right">
          © 2024 NexusCrop All rights  <br/> reserved.
        </p>
      </div>

    </div>
  </div>
</footer>
        </section>


    )
}








