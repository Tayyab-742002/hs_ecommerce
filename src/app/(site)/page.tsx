import { Hero } from '@/components/pages/home/hero'
import { FeaturedPlatforms } from '@/components/pages/home/featured-platforms'
import { ServicesShowcase } from '@/components/pages/home/services-showcase'
import { PlatformsOverview } from '@/components/pages/home/platforms-overview'
import { StatsSection } from '@/components/pages/home/stats-section'
import { Testimonials } from '@/components/pages/home/testimonials'
import { CustomerLogos } from '@/components/pages/home/customer-logos'
import { FAQSection } from '@/components/pages/home/faq-section'
import { WhyChooseUs } from '@/components/pages/home/why-choose-us'
import { CTASection } from '@/components/pages/home/cta-section'
import { getHomePageData } from '@/lib/services/home'
import { getPlatforms } from '@/lib/services/platforms'
import { Platform } from '@/lib/fallback-data'

export default async function Home() {
  try {
    const [{ hero }, platforms] = await Promise.all([
      getHomePageData(),
      getPlatforms()
    ])

    console.log('Fetched home data:', { hero, platforms })

    return (
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <Hero {...hero} />

        {/* Stats Section */}
        <StatsSection />
        
        {/* Why Choose Us Section */}
        <WhyChooseUs />
        
        {/* Featured Platforms Section */}
        <FeaturedPlatforms platforms={platforms as Platform[]} />
        
        {/* Customer Logos Section */}
        <CustomerLogos />
        
        {/* Services Showcase Section */}
        <ServicesShowcase />
        
        {/* All Platforms Overview */}
        <PlatformsOverview />
        
        {/* Testimonials Section */}
        <Testimonials />
        
        {/* FAQ Section */}
        <FAQSection />
        
        {/* Call to Action Section */}
        <CTASection />
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
