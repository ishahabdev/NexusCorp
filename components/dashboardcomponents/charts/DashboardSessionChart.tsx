"use client"

import { CartesianGrid, Line, LineChart,  } from "recharts"

import { IoMdTrendingDown } from "react-icons/io";


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
import { Zap } from "lucide-react";

export const description = "A line chart"

const chartData = [
  { desktop: 70 },
  { desktop: 66 },
  { desktop: 75 },
  { desktop: 40 },
  { desktop: 76 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export default function DashboardSessionChart() {
  return (
    <Card>
      <CardHeader className="flex justify-between ">
        <CardTitle >
     <Zap className=" bg-red-100  text-red-900 rounded-md p-2 h-8 w-8 " strokeWidth={2.5} />
        </CardTitle>
        <CardDescription className="text-red-900">
          <span className="flex text-xs gap-1">-2.4% <IoMdTrendingDown /></span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <CardDescription  className="text-xs text-gray-800 py-2">Active Sessions </CardDescription>
        <CardDescription className="text-2xl text-black font-semibold">
        1824
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
              stroke="var(--chart-2)"
              
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>

    </Card>
  )
}
