"use client"

import { TrendingUp } from "lucide-react"
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  type ChartConfig,
} from "@/components/ui/chart"

const chartData = [
  { visitors: 1260000, fill: "var(--color-safari)" },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
} satisfies ChartConfig

export default function DashboardTrafficChart2() {
  return (
  <Card className="flex flex-col w-full min-w-0 h-auto overflow-visible">
  <CardHeader className="items-center pb-0 p-3 sm:p-4">
    <CardTitle className="text-sm sm:text-base">Traffic Sources</CardTitle>
    <CardDescription className="text-[10px] sm:text-xs">
      Acquisition breakdown per channel.
    </CardDescription>
  </CardHeader>
  <CardContent className="flex-1 pb-4 w-full flex flex-col items-center">
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square w-full  sm:max-w-40 h-50 md:max-w-40 lg:max-w-56"
    >
      <RadialBarChart
        data={chartData}
        endAngle={360}
        innerRadius={65}
        outerRadius={95}
      >
        <RadialBar dataKey="visitors" className="fill-gray-100 text-4xl font-bold" />
        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy}
                      className="fill-foreground text-4xl font-bold"
                    >
                      {(chartData[0].visitors / 1000000).toFixed(1)}M
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 24}
                      className="fill-muted-foreground"
                    >
                      Total
                    </tspan>
                  </text>
                )
              }
            }}
          />
        </PolarRadiusAxis>
      </RadialBarChart>
    </ChartContainer>

    <div className="flex flex-col gap-2 w-full mt-4">
      <div className="flex items-center gap-2">
        <div className="bg-blue-600 h-2.5 w-2.5 rounded-full shrink-0"></div>
        <p className="flex justify-between font-medium w-full text-sm">
          Direct <span className="text-xs">45%</span>
        </p>
      </div>

      <div className="flex items-center gap-2">
        <div className="bg-gray-600 h-2.5 w-2.5 rounded-full shrink-0"></div>
        <p className="flex justify-between font-medium w-full text-sm">
          Organic Search <span className="text-xs">30%</span>
        </p>
      </div>

      <div className="flex items-center gap-2">
        <div className="bg-gray-300 h-2.5 w-2.5 rounded-full shrink-0"></div>
        <p className="flex justify-between font-medium w-full text-sm">
          Referal <span className="text-xs">20%</span>
        </p>
      </div>
    </div>
  </CardContent>
</Card>
  )
}