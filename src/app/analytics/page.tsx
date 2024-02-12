import { analytics } from "@/utils/analytics"

const Page = async () => {


    const pageView = await analytics.retrieve("pageview" , "11/02/2024")

    return <pre className="text-white">{JSON.stringify(pageView)}</pre>
}

export default Page