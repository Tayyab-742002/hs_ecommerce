import { SitemapStream, streamToPromise } from "sitemap";
import { getPlatforms } from "@/lib/services/platforms";
import { getAccounts } from "@/lib/services/accounts";
import { getAllServices } from "@/lib/services/all-services";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Create sitemap stream
    const smStream = new SitemapStream({
      hostname: "https://www.hsecommerce.store",
    });

    // Add static pages
    const staticPages = [
      { url: "/", changefreq: "weekly", priority: 1.0 },
      { url: "/about", changefreq: "monthly", priority: 0.8 },
      { url: "/contact", changefreq: "monthly", priority: 0.8 },
      { url: "/platforms", changefreq: "weekly", priority: 0.9 },
      { url: "/accounts", changefreq: "daily", priority: 0.9 },
      { url: "/services", changefreq: "weekly", priority: 0.9 },
      { url: "/terms", changefreq: "yearly", priority: 0.5 },
      { url: "/privacy", changefreq: "yearly", priority: 0.5 },
    ];

    // Add static pages to sitemap
    staticPages.forEach((page) => {
      smStream.write(page);
    });

    try {
      // Fetch dynamic data
      const [platforms, accounts, services] = await Promise.all([
        getPlatforms(),
        getAccounts({ useFallback: true }),
        getAllServices({ useFallback: true }),
      ]);

      // Add platform pages
      platforms.forEach((platform) => {
        smStream.write({
          url: `/platforms/${platform.slug}`,
          changefreq: "weekly",
          priority: 0.8,
        });
      });

      // Add service pages
      services.forEach((service) => {
        smStream.write({
          url: `/services/${service.slug}`,
          changefreq: "weekly",
          priority: 0.7,
        });
      });
    } catch (error) {
      console.error("Error fetching dynamic content:", error);
      // Continue with static pages if dynamic content fails
    }

    // End the stream
    smStream.end();

    // Generate sitemap from stream
    const sitemap = await streamToPromise(smStream).then((sm) => sm.toString());

    // Return the XML response
    return new NextResponse(sitemap, {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, s-maxage=1200, stale-while-revalidate=600",
      },
    });
  } catch (error) {
    console.error(error);
    return new NextResponse("Error generating sitemap", { status: 500 });
  }
}
