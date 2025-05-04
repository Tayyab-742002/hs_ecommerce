import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { CookieConsent } from "@/components/ui/cookie-consent";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Head from "next/head";

// Add structured data script to help with SEO
export function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "HS Ecommerce Agency",
            alternateName: ["H&S Ecommerce", "H and S Ecommerce"],
            url: "https://www.hsecommerce.store",
            logo: "https://www.hsecommerce.store/logo.png", // Google uses this for search results
            image: "https://www.hsecommerce.store/logo.png",
            description: "HS Ecommerce (H&S) provides professional e-commerce services for Amazon, eBay, Walmart, TikTok and Etsy platforms.",
            sameAs: [
              "https://www.facebook.com/hsecommerce",
              "https://www.instagram.com/hsecommerce",
              "https://twitter.com/hsecommerce",
            ],
            address: {
              "@type": "PostalAddress",
              addressCountry: "United Kingdom",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+447955426807",
              email: "contact@hsecommerce.store",
              contactType: "customer service",
            },
            serviceArea: {
              "@type": "GeoCircle",
              geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: 51.5074,
                longitude: 0.1278,
              },
              geoRadius: "2000",
            },
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate: "https://www.hsecommerce.store/search?q={search_term_string}",
              },
              query: "required",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
    </>
  );
}

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow px-4 md:px-6 lg:px-8">{children}</main>
        <Footer />
        <FloatingContact />
        <ScrollToTop />
        <CookieConsent />
      </div>
    </>
  );
}
