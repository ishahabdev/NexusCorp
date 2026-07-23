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
    <Card className="flex flex-col h-110">
      <CardHeader className="items-center pb-0">
        <CardTitle>Traffic Sources</CardTitle>
        <CardDescription>Acquisition breakdown per channel.</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0 w-76">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square"
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
      <div className="flex flex-col gap-2">
  <div className="flex items-center gap-2">
    <div className="bg-blue-600 h-2.5 w-2.5 rounded-full shrink-0"></div>
    <p className="flex justify-between font-medium w-62">
      Direct <span className="text-xs">45%</span>
    </p>
  </div>

  <div className="flex items-center  gap-2">
    <div className="bg-gray-600 h-2.5 w-2.5 rounded-full shrink-0"></div>
    <p className="flex justify-between font-medium w-62">
      Organic Search <span className="text-xs">30%</span>
    </p>
  </div>

  <div className="flex items-center gap-2">
    <div className="bg-gray-300 h-2.5 w-2.5 rounded-full shrink-0"></div>
    <p className="flex justify-between font-medium w-62">
      Referal <span className="text-xs">20%</span>
    </p>
  </div>
</div>
       
      </CardContent>
    </Card>
  )
}