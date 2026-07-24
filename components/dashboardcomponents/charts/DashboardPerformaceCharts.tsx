"use client"

import { Bar, BarChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  type ChartConfig,
} from "@/components/ui/chart"

const chartData = [
  { revenue: 90, Income: 70, sessions: 50 },
  { Income: 90, sessions: 65, revenue: 110 },
  { Income: 90, sessions: 65, revenue: 110 },
]

const chartConfig = {
  Income: {
    label: "Active Income",
    color: "var(--chart-7)",
  },
  sessions: {
    label: "Active Session",
    color: "var(--chart-6)",
  },
  revenue: {
    label: "Active Revenue",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig

export default function DashboardPerformaceCharts() {
  return (
    <Card className="h-full border-2 w-full min-w-0 rounded-xl overflow-hidden">
      <CardHeader>
        <CardTitle className="text-xl font-normal">
          System Performance
        </CardTitle>
        <CardDescription>
          Real-time data flow across all Nexus nodes.
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full min-w-0 overflow-hidden">
        <ChartContainer config={chartConfig} className="rounded-none w-full min-w-0 px-2 sm:px-6">
          <BarChart
            accessibilityLayer
            data={chartData}
            barCategoryGap={0}
            barGap={0}
            margin={{ left: 0, top: 0, right: 0 }}
          >
            <Bar dataKey="sessions" fill="var(--color-sessions)" />
            <Bar dataKey="revenue" fill="var(--color-revenue)" />
            <Bar dataKey="Income" fill="var(--color-Income)" />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}