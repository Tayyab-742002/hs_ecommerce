import { Hero } from '@/components/pages/home/hero'
import { FeaturedPlatforms } from '@/components/pages/home/featured-platforms'
import { getHomePageData } from '@/lib/services/home'
import { getPlatforms } from '@/lib/services/platforms'

export default async function Home() {
  try {
    const [{ hero }, platforms] = await Promise.all([
      getHomePageData(),
      getPlatforms()
    ])

    console.log('Fetched home data:', { hero, platforms })

    return (
      <div className="flex flex-col min-h-screen">
        <Hero {...hero} />
        <FeaturedPlatforms platforms={platforms} />
      </div>
    )
  } catch (error) {
    console.error('Error in Home page:', error)
    return (
      <div className="flex flex-col min-h-screen items-center justify-center">
        <h1 className="text-2xl">Something went wrong</h1>
        <p className="text-gray-600">Please try again later</p>
      </div>
    )
  }
}



