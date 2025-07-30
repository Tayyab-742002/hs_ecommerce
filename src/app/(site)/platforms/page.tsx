import { CTASection } from "@/components/pages/home/cta-section";
import { Platform } from "@/lib/fallback-data";
import { getPlatforms } from "@/lib/services/platforms";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Users } from "lucide-react";
import { TopHeader } from "@/components/common/TopHeader";

export const revalidate = 60;

export default async function PlatformsPage() {
  const platforms = await getPlatforms();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      {/* Hero Header */}
      <div className="relative overflow-hidden">
        <TopHeader
          title={{
            main: "Our Platforms",
            subtitle:
              "Choose from our premium collection of verified e-commerce platforms. Each account is carefully curated for instant success.",
          }}
          description={{
            text: "Choose from our premium collection of  {highlight1} e-commerce platforms. Each account is carefully curated for instant success.",
            highlights: [{ text: "verified", color: "primary" }],
          }}
          badge={{
            icon: Users,
            text: "Our Platforms",
          }}
        />
      </div>

      {/* Platforms Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {platforms.map((platform: Platform, index: number) => (
            <Link
              key={platform._id}
              href={`/platforms/${platform.slug}`}
              className="group block relative"
            >
              {/* Card Container */}
              <div
                className="relative h-full p-6 lg:p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 
                            hover:border-primary/20 hover:bg-card/80 transition-all duration-500 
                            hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2"
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Logo Section */}
                  {platform.logo && (
                    <div className="mb-6 flex justify-center">
                      <div className="relative p-3 w-24 h-24 flex justify-center items-center rounded-2xl bg-background/80  backdrop-blur-sm border border-border/30 group-hover:border-primary/20 transition-all duration-300">
                        <Image
                          src={platform.logo.asset.url}
                          alt={platform.name}
                          width={48}
                          height={48}
                          sizes="48px"
                          priority
                          className="rounded-xl group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  )}

                  {/* Platform Name */}
                  <h2 className="text-xl lg:text-2xl font-bold text-center mb-6 group-hover:text-primary transition-colors duration-300">
                    {platform.name}
                  </h2>

                  {/* Features List */}
                  <div className="space-y-3 mb-6">
                    {platform?.features
                      ?.slice(0, 3)
                      .map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-start gap-3 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                        >
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="leading-relaxed">
                            {feature.title}
                          </span>
                        </div>
                      ))}
                  </div>

                  {/* Action Button */}
                  <div className="flex items-center justify-center gap-2 text-primary group-hover:gap-4 transition-all duration-300">
                    <span className="text-sm font-medium">
                      Explore Platform
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>
              </div>

              {/* Card Number Badge */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                {index + 1}
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Stats Section */}
        <div className="mt-16 pt-12 border-t border-border/30">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-2xl lg:text-3xl font-bold text-primary">
                {platforms.length}+
              </div>
              <div className="text-sm text-muted-foreground">
                Platforms Available
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl lg:text-3xl font-bold text-primary">
                24/7
              </div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl lg:text-3xl font-bold text-primary">
                1000+
              </div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl lg:text-3xl font-bold text-primary">
                99%
              </div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      <CTASection />
    </div>
  );
}
