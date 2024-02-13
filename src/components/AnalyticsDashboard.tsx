"use client"

import { analytics } from "@/utils/analytics"
import { BarChart, Card } from "@tremor/react"

interface AnalyticsDashboardProps {
    avgVisitorsPerDay: string
    amtVisitorsToday: number
    timerseriesPageviews : Awaited<ReturnType<typeof analytics.retrieveDays>>
}

const AnalyticsDashboard = ({
    avgVisitorsPerDay,
    amtVisitorsToday,
    timerseriesPageviews,
}:
    AnalyticsDashboardProps) => {
    return (
    <div className="flex flex-col gap-6">
        <div className="grid w-full mx-auto grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="w-full mx-auto max-w-xs">
                <p className="text-tremor-default text-dark-tremor-content">
                    Avg. vistors/day
                    </p>
                <p className="text-3x1 
                text-dark-tremor-content-strong font-semibold">
                    {avgVisitorsPerDay}
                </p>
            </Card>
            <Card className="w-full mx-auto max-w-xs">
                <p className="text-tremor-default text-dark-tremor-content">
                    Vistors today
                    </p>
                <p className="text-3x1 text-dark-tremor-content-strong font-semibold">
                    {amtVisitorsToday}
                </p>
            </Card>
        </div>

        <Card>
            {timerseriesPageviews ? (
                <BarChart allowDecimals={false} showAnimation data={
                    timerseriesPageviews.map((day) => ({
                        name: day.date,
                        Visitors: day.events.reduce((acc , curr ) =>{
                           return acc + Object.values(curr)[0]! 
                        }, 0)
                    }))}
                    categories={["Visitors"]}
                    index='name'
                    />
            ): null}
        </Card>
    </div>
    )
}

export default AnalyticsDashboard