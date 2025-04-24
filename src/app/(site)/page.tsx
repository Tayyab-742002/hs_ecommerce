import { Hero } from "@/components/pages/home/hero";
import { ServicesShowcase } from "@/components/pages/home/services-showcase";
import { PlatformsOverview } from "@/components/pages/home/platforms-overview";
import { StatsSection } from "@/components/pages/home/stats-section";
import { Testimonials } from "@/components/pages/home/testimonials";
import { FAQSection } from "@/components/pages/home/faq-section";
import { WhyChooseUs } from "@/components/pages/home/why-choose-us";
import { CTASection } from "@/components/pages/home/cta-section";
import { getHomePageData } from "@/lib/services/home";

export default async function Home() {
  try {
    const [{ hero }] = await Promise.all([
      getHomePageData(),
    ]);

    // console.log("Fetched home data:", { hero });

    return (
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        {hero && <Hero {...(hero as any)} />}

        {/* Stats Section */}
        <StatsSection />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Featured Platforms Section */}
        {/* <FeaturedPlatforms platforms={platforms.map(p => ({
          ...p,
          slug: { current: p.slug }
        }))} /> */}

        {/* Customer Logos Section */}
        {/* <CustomerLogos /> */}

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
    );
  } catch (error) {
    console.error("Error in Home page:", error);
    return (
      <div className="flex flex-col min-h-screen items-center justify-center">
        <h1 className="text-2xl">Something went wrong</h1>
        <p className="text-gray-600">Please try again later</p>
      </div>
    );
  }
}
