"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

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

export const description = "A bar chart"

const chartData = [
    { month: "JAN", desktop: 0 },
    { month: "FEB", desktop: 0 },
    { month: "MAR", desktop: 0 },
    { month: "APR", desktop: 0 },
    { month: "MAY", desktop: 0 },
    { month: "JUN", desktop: 0 },
]

const chartConfig = {
    desktop: {
        label: "Desktop",
    },
} satisfies ChartConfig

export default function DashboardTrafficCharts() {
    return (
        <Card className="w-full min-w-0 h-64 sm:h-72 md:h-80 lg:h-110">
            <CardHeader className="p-3 sm:p-4 md:p-6">
                <CardTitle className="text-l sm:text-base md:text-2xl font-bold">
                    Monthly Traffic
                </CardTitle>
                <CardDescription className="text-[10px] sm:text-xs md:text-sm">
                    Unique visitors across all registered domains.
                </CardDescription>
            </CardHeader>
            <CardContent className="p-2 sm:p-4 md:p-6">
                <ChartContainer
                    config={chartConfig}
                    className="w-full min-w-0 h-40 sm:h-48 md:h-56 lg:h-74 py-2 sm:py-4 md:py-6 border-b-2 text-[10px] sm:text-xs md:text-sm"
                >
                    <BarChart accessibilityLayer data={chartData}>
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            fontSize={10}
                        />
                        <YAxis
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            domain={[0, 100000]}
                            ticks={[25000, 50000, 75000, 100000]}
                            tickFormatter={(value) => `${value / 1000}K`}
                            fontSize={10}
                        />

                        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}