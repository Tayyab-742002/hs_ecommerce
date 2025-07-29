"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { getPlatformColor } from "@/lib/utils/platform-colors";
import { FaAmazon, FaEtsy, FaTiktok, FaEbay } from "react-icons/fa";
import { TbBrandWalmart } from "react-icons/tb";
import CardFlip from "@/components/mvpblocks/card-flip";

import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { LiaSmileWinkSolid } from "react-icons/lia";
export function PlatformsOverview() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  // These would ideally come from your Sanity CMS, but for now using static data
  const platforms = [
    {
      title: "Amazon",
      subtitle: "Sell globally with the world's largest e-commerce platform",
      logo: "/images/platforms/amazon-logo.png",
      slug: "amazon",
      description:
        "World's largest online marketplace with billions of customers across the globe.",
      accountTypes: ["Seller Central", "Buyer", "Professional", "Individual"],
      features: [
        "Global Reach",
        "FBA (Fulfilled by Amazon)",
        "Brand Registry",
        "Sponsored Ads",
      ],
      link: "/platforms/amazon",
      icon: (
        <FaAmazon
          className="h-full w-full text-white"
          style={{ color: getPlatformColor("Amazon") }}
        />
      ),
    },
    {
      title: "eBay",
      subtitle: "Reach a global audience for niche and pre-owned goods",
      logo: "/images/platforms/ebay-logo.png",
      slug: "ebay",
      description:
        "Leading online marketplace for unique, used, and specialized products.",
      accountTypes: ["Seller", "Buyer", "Store", "Business"],
      features: [
        "Auction & Fixed-Price Listings",
        "eBay Stores",
        "Global Shipping Program",
        "Terapeak Insights",
      ],
      link: "/platforms/ebay",
      icon: (
        <FaEbay
          className="h-full w-full text-white"
          style={{ color: getPlatformColor("eBay") }}
        />
      ),
    },
    {
      title: "Walmart",
      subtitle: "Tap into millions of loyal Walmart shoppers",
      logo: "/images/platforms/walmart-logo.png",
      slug: "walmart",
      description:
        "Fast-growing marketplace with access to millions of Walmart shoppers.",
      accountTypes: ["Seller", "Supplier", "Fulfillment"],
      features: [
        "Walmart Fulfillment Services (WFS)",
        "Pro Seller Badge",
        "Omni-channel Retail",
        "Competitive Pricing Tools",
      ],
      link: "/platforms/walmart",
      icon: (
        <TbBrandWalmart
          className="h-full w-full text-white"
          style={{ color: getPlatformColor("Walmart") }}
        />
      ),
    },
    {
      title: "TikTok",
      subtitle: "Leverage viral video marketing for instant product exposure",
      logo: "/images/platforms/tiktok-logo.png",
      slug: "tiktok",
      description:
        "Rapidly expanding social commerce platform with viral marketing potential.",
      accountTypes: ["TikTok Shop", "Business", "Creator"],
      features: [
        "In-Video Shopping",
        "Creator Marketplace",
        "Ad Manager Tools",
        "Live Commerce",
      ],
      link: "/platforms/tiktok",
      icon: (
        <FaTiktok
          className="h-full w-full text-white"
          style={{ color: getPlatformColor("TikTok") }}
        />
      ),
    },
    {
      title: "Etsy",
      subtitle: "Perfect platform for handmade, vintage, and creative goods",
      logo: "/images/platforms/etsy-logo.png",
      slug: "etsy",
      description:
        "Specialized marketplace for handmade, vintage, and unique factory-manufactured items.",
      accountTypes: ["Seller", "Pattern", "Handmade", "Vintage"],
      features: [
        "Customizable Storefront",
        "Product Personalization",
        "Etsy Ads",
        "Etsy Pattern Website Builder",
      ],
      link: "/platforms/etsy",
      icon: (
        <FaEtsy
          className="h-full w-full text-white"
          style={{ color: getPlatformColor("Etsy") }}
        />
      ),
    },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
            <LiaSmileWinkSolid className="w-3 h-3" />
            All Major Platforms
          </div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Explore Our Supported Platforms
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            We provide specialized accounts and services for all major
            e-commerce platforms. Choose your preferred platform and get
            started.
          </p>
        </motion.div>

        {/* Platforms grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6 mb-12 justify-items-center">
          {platforms.map((platform, index) => {
            const platformColor = getPlatformColor(platform.title);
            return (
              <CardFlip
                key={index}
                title={platform.title}
                subtitle={platform.subtitle}
                description={platform.description}
                features={platform.features}
                icon={platform.icon}
                link={platform.link}
                platformColor={platformColor}
              />
            );
          })}
        </div>

        {/* View all platforms button */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/platforms">
            <InteractiveHoverButton className="border border-primary/50">
              View All Platform Details
            </InteractiveHoverButton>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
