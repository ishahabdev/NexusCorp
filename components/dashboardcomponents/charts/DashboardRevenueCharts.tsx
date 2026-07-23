"use client"

import { CartesianGrid, Line, LineChart } from "recharts"
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
import { Wallet } from "lucide-react";

const chartData = [
  { desktop: 70 },
  { desktop: 90 },
  { desktop: 71 },
  { desktop: 130 },
  { desktop: 30 },
  { desktop: 98 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export default function DashboardRevenueCharts() {
  return (
    <Card className="w-full min-w-0">
      <CardHeader className="flex justify-between">
        <CardTitle>
          <Wallet className="text-blue-700 bg-blue-100 rounded-md p-2 h-8 w-8" strokeWidth={4.5} />
        </CardTitle>
        <CardDescription className="text-red-900">
          <span className="flex text-xs">+8.2% <AiOutlineRise /></span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-xs text-gray-800 py-2">Total Revenue</CardDescription>
        <CardDescription className="text-2xl text-black font-semibold">
          $124,500
        </CardDescription>
        <ChartContainer config={chartConfig} className="h-20 w-full min-w-0">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{ left: 12, top: 20, right: 12 }}
          >
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Line
              dataKey="desktop"
              type="natural"
              stroke="var(--chart-4)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}