"use client"

import { CartesianGrid, Line, LineChart,  } from "recharts"
import { FaRegUser } from "react-icons/fa";
import { AiOutlineRise } from "react-icons/ai";

import {
  Card,
  CardContent,
  CardDescription,

  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

export const description = "A line chart"

const chartData = [
  { desktop: 70 },
  { desktop: 90 },
  { desktop: 71 },
  { desktop: 100 },
  { desktop: 55 },
  { desktop: 150 },
  { desktop: 80 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export default function DashboardUsersCharts() {
  return (
    <Card>
      <CardHeader className="flex justify-between ">
        <CardTitle >
      <FaRegUser className="text-blue-700 bg-blue-100 rounded-md p-2 h-8 w-8 " strokeWidth={4.5} />
        </CardTitle>
        <CardDescription className="text-red-900">
          <span className="flex text-xs">+12.5% <AiOutlineRise /></span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <CardDescription  className="text-xs text-gray-800 py-2"> Total Users</CardDescription>
        <CardDescription className="text-2xl text-black font-semibold">
          48,294
        </CardDescription>
        <ChartContainer config={chartConfig} className="h-20 w-50 min-w-0" >
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              top: 20,
              right: 12,
            }}
          >

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="desktop"
              type="natural"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>

    </Card>
  )
}
