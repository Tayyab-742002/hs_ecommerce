'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function PlatformsOverview() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  // Get platform color by name
  const getPlatformColor = (platformName: string) => {
    const lowerName = platformName.toLowerCase();

    // Default to primary if platform color is not found
    if (!['amazon', 'ebay', 'walmart', 'tiktok', 'etsy'].includes(lowerName)) {
      return 'var(--color-brand-primary)';
    }

    return `var(--color-${lowerName})`;
  };

  // These would ideally come from your Sanity CMS, but for now using static data
  const platforms = [
    {
      name: "Amazon",
      logo: "/images/platforms/amazon-logo.png",
      slug: "amazon",
      description: "World's largest online marketplace with billions of customers across the globe.",
      accountTypes: ["Seller Central", "Buyer", "Professional", "Individual"]
    },
    {
      name: "eBay",
      logo: "/images/platforms/ebay-logo.png",
      slug: "ebay",
      description: "Leading online marketplace for unique, used, and specialized products.",
      accountTypes: ["Seller", "Buyer", "Store", "Business"]
    },
    {
      name: "Walmart",
      logo: "/images/platforms/walmart-logo.png",
      slug: "walmart",
      description: "Fast-growing marketplace with access to millions of Walmart shoppers.",
      accountTypes: ["Seller", "Supplier", "Fulfillment"]
    },
    {
      name: "TikTok",
      logo: "/images/platforms/tiktok-logo.png",
      slug: "tiktok",
      description: "Rapidly expanding social commerce platform with viral marketing potential.",
      accountTypes: ["TikTok Shop", "Business", "Creator"]
    },
    {
      name: "Etsy",
      logo: "/images/platforms/etsy-logo.png",
      slug: "etsy",
      description: "Specialized marketplace for handmade, vintage, and unique factory-manufactured items.",
      accountTypes: ["Seller", "Pattern", "Handmade", "Vintage"]
    }
  ]

  return (
    <section className="py-24 ">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            All Major Platforms
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Explore Our Supported Platforms
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-500 dark:text-gray-400 text-lg max-w-3xl mx-auto"
          >
            We provide specialized accounts and services for all major e-commerce platforms. Choose your preferred platform and get started.
          </motion.p>
        </motion.div>

        {/* Platforms grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {platforms.map((platform, index) => {
            const platformColor = getPlatformColor(platform.name);
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="relative group bg-card rounded-md md:p-6 p-2 "
              >
                <div
                  className="rounded-2xl overflow-hidden h-full flex flex-col shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${platformColor}, ${platformColor}aa)`
                  }}
                >
                  {/* Platform header */}
                  <div className="p-6 flex items-center gap-4 border-b border-white/20">
                    <div className="bg-accent rounded-full p-2 h-14 w-14 flex items-center justify-center shadow-md">
                      <div className="relative w-8 h-8">
                        <Image
                          src={platform.logo}
                          alt={platform.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white">{platform.name}</h3>
                  </div>

                  {/* Platform content */}
                  <div className="p-6 text-white flex-grow">
                    <p className="mb-6 text-white/90">
                      {platform.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-sm uppercase tracking-wider text-white/80 mb-3">
                        Available Account Types
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {platform.accountTypes.map((type, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium"
                          >
                            {type}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Platform footer */}
                  <div className="px-6 pb-6 mt-auto">
                    <Link href={`/platforms/${platform.slug}`}>
                      <Button
                        className="w-full bg-white hover:bg-white/90 text-gray-900"
                      >
                        Explore {platform.name}
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
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
            <Button size="lg" variant="outline" className="rounded-full px-8">
              View All Platform Details
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
