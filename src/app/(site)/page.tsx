import { Metadata } from "next";
import { Hero } from "@/components/pages/home/hero";
import { ServicesShowcase } from "@/components/pages/home/services-showcase";
import { PlatformsOverview } from "@/components/pages/home/platforms-overview";
import { StatsSection } from "@/components/pages/home/stats-section";
import { Testimonials } from "@/components/pages/home/testimonials";
import { FAQSection } from "@/components/pages/home/faq-section";
import { WhyChooseUs } from "@/components/pages/home/why-choose-us";
import { CTASection } from "@/components/pages/home/cta-section";
import { getHomePageData } from "@/lib/services/home";

export const revalidate = 60;

// Generate metadata for the home page
export const generateMetadata = async (): Promise<Metadata> => {
  // Can fetch metadata from Sanity if needed
  return {
    title:
      "HS Ecommerce | H&S Ecommerce Agency | Amazon, eBay & Walmart Services",
    description:
      "HS Ecommerce Agency (H&S) provides professional e-commerce services for Amazon, eBay, Walmart, TikTok and Etsy platforms including seller accounts, VA services, account reinstatement & 3PL logistics solutions.",
    keywords:
      "hs ecommerce, h&s ecommerce, h and s ecommerce, ecommerce services, amazon seller accounts, ebay accounts, walmart seller, tiktok shop, etsy seller, virtual assistant services, account reinstatement, 3pl services, logistics, warehousing, fulfillment",
    alternates: {
      canonical: "/",
    },
  };
};

export default async function Home() {
  try {
    const [{ hero }] = await Promise.all([getHomePageData()]);

    // console.log("Fetched home data:", { hero });

    return (
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        {hero && <Hero {...(hero as any)} />}

        {/* Stats Section */}
        {/* <StatsSection /> */}

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
