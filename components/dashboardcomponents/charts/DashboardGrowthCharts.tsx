"use client"

import { TrendingUp, TrendingUpIcon } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

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
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig,
} from "@/components/ui/chart"

export const description = "A linear line chart"

const chartData = [
    { desktop: 100 },
    { desktop: 115 },
    { desktop: 110 },
    { desktop: 115 },
    { desktop: 130 },
    { desktop: 125 },
    { desktop: 150 },
]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "var(--chart-1)",
    },
} satisfies ChartConfig

export default function DashboardGrowthCharts() {
    return (
        <Card>
            <CardHeader className="flex justify-between ">
                <CardTitle >
                    <TrendingUpIcon className="text-blue-700 bg-blue-100 rounded-md p-2 h-8 w-8 " strokeWidth={3} />
                </CardTitle>
                <CardDescription className="text-red-900">
                    <span className="flex text-md">+18% <TrendingUpIcon className='w-5 h-5' strokeWidth={1.2} /> </span>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <CardDescription className="text-xs text-gray-800 py-2"> Total Users</CardDescription>
                <CardDescription className="text-2xl text-black font-semibold">
                   34.2%
                </CardDescription>
                <ChartContainer config={chartConfig} className="h-20 w-50 min-w-0">
                    <LineChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            top:20,
                            right: 12,
                        }}
                    >

                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Line
                            dataKey="desktop"
                            type="linear"
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
