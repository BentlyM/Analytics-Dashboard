import { Analytics, analytics } from "@/utils/analytics"

const Page = async () => {


    const pageView = await analytics.retrieveDays("pageview" , 2)

    return <div className="min-h-screen w-full py-12 flex justify-center items-center">
        <div className="relative w-full max-w-6x1 mx-auto text-white">
            <AnalyticsDashboard />
        </div>
    </div>
}

export default Page