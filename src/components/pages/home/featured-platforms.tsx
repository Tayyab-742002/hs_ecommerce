"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, ChevronRight, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface Platform {
  _id: string
  name: string
  slug: {
    current: string
  }
  description?: any[] // Portable Text format
  logo?: {
    asset: {
      url: string
    }
  }
  features?: Array<{
    title: string
    description?: string
  }>
}

interface FeaturedPlatformsProps {
  platforms: Platform[]
}

export function FeaturedPlatforms({ platforms }: FeaturedPlatformsProps) {
  const [activePlatform, setActivePlatform] = useState<string | null>(platforms[0]?._id || null)

  // Reordered and filtered top platforms
  const topPlatforms = ['Amazon', 'eBay', 'Walmart', 'TikTok', 'Etsy']
    .map(name => platforms.find(p => p.name === name))
    .filter(Boolean) as Platform[]
  
  // Get the active platform object
  const currentPlatform = platforms.find(p => p._id === activePlatform) || topPlatforms[0]

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

  // Platform color map using CSS variables
  const getPlatformColor = (platformName: string) => {
    const lowerName = platformName.toLowerCase();
    
    // Default to primary if platform color is not found
    if (!['amazon', 'ebay', 'walmart', 'tiktok', 'etsy'].includes(lowerName)) {
      return 'var(--color-brand-primary)';
    }
    
    return `var(--color-${lowerName})`;
  };

  // Helper function to get plain text description from Portable Text
  const getPlainTextDescription = (portableText?: any[]) => {
    if (!portableText || !Array.isArray(portableText)) {
      return `Professional ${currentPlatform.name} accounts and specialized services for sellers and buyers. Get verified accounts, expert support, and account management solutions.`;
    }
    
    // Extract just the text content from portable text blocks
    return portableText
      .filter(block => block._type === 'block')
      .map(block => 
        block.children
          .filter((child: any) => child._type === 'span')
          .map((span: any) => span.text)
          .join('')
      )
      .join(' ');
  }

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Major Marketplaces
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Explore E-commerce Platforms
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-gray-500 dark:text-gray-400 text-lg max-w-3xl mx-auto"
          >
            We provide specialized accounts and expert services for all major e-commerce marketplaces
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
          {/* Platform tabs */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
              <div className="font-medium text-lg p-4 border-b border-border">
                Platforms
              </div>
              <div className="divide-y divide-border">
                {topPlatforms.map((platform) => {
                  const platformColor = getPlatformColor(platform.name);
                  
                  return (
                    <button
                      key={platform._id}
                      onClick={() => setActivePlatform(platform._id)}
                      className={`flex items-center gap-3 w-full p-4 text-left transition-colors ${
                        activePlatform === platform._id 
                          ? 'bg-primary/5' 
                          : 'hover:bg-accent/5'
                      }`}
                      style={activePlatform === platform._id ? { color: platformColor } : {}}
                    >
                      <div 
                        className="w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${platformColor}20` }}
                      >
                        {platform.logo ? (
                          <div className="relative w-4 h-4">
                            <Image
                              src={platform.logo.asset.url}
                              alt={platform.name}
                              fill
                              sizes="(max-width: 768px) 16px, 16px"
                              className="object-contain"
                            />
                          </div>
                        ) : (
                          <ShoppingCart 
                            className="w-4 h-4" 
                            style={{ color: platformColor }}
                          />
                        )}
                      </div>
                      <span>{platform.name}</span>
                      {activePlatform === platform._id && (
                        <ChevronRight className="ml-auto w-4 h-4" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Platform details */}
          <div className="lg:col-span-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPlatform?._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-card rounded-2xl border border-border overflow-hidden shadow-md"
              >
                {/* Platform header */}
                <div 
                  className="text-white p-6"
                  style={{ 
                    background: `linear-gradient(135deg, ${getPlatformColor(currentPlatform.name)}, ${getPlatformColor(currentPlatform.name)}aa)` 
                  }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center gap-4 mb-4 md:mb-0">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-sm">
                        {currentPlatform.logo ? (
                          <div className="relative w-10 h-10">
                            <Image
                              src={currentPlatform.logo.asset.url}
                              alt={currentPlatform.name}
                              fill
                              sizes="(max-width: 768px) 40px, 40px"
                              className="object-contain"
                            />
                          </div>
                        ) : (
                          <ShoppingCart className="w-8 h-8 text-white" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{currentPlatform.name}</h3>
                        <p className="text-white/80">Professional Accounts & Services</p>
                      </div>
                    </div>
                    <Button 
                      className="bg-white text-gray-900 hover:bg-white/90" 
                      asChild
                    >
                      <Link href={`/platforms/${currentPlatform.slug.current}`}>
                        View Details
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Platform info */}
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-8">
                    {getPlainTextDescription(currentPlatform.description)}
                  </p>

                  {/* Features grid */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {(currentPlatform.features || defaultFeatures).map((feature, index) => (
                      <div key={index} className="flex space-x-4">
                        <div className="flex-shrink-0 mt-1">
                          <CheckCircle 
                            className="w-5 h-5" 
                            style={{ color: getPlatformColor(currentPlatform.name) }}
                          />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">{feature.title}</h4>
                          {feature.description && (
                            <p className="text-sm text-gray-500 dark:text-gray-400">{feature.description}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 border-t border-border pt-8">
                    {platformStats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div 
                          className="text-3xl font-bold mb-1"
                          style={{ color: getPlatformColor(currentPlatform.name) }}
                        >
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" asChild className="rounded-full px-8">
            <Link href="/platforms">
              View All Platforms
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

// Default content in case platform doesn't have features
const defaultFeatures = [
  { title: "Verified Accounts", description: "Ready to use accounts with full verification" },
  { title: "Multiple Country Options", description: "Available for all major geographic regions" },
  { title: "Quick Delivery", description: "Most accounts delivered within 24-48 hours" },
  { title: "VA Services Available", description: "Expert virtual assistants for account management" }
]

// Stats that show under each platform
const platformStats = [
  { value: "100%", label: "Success Rate" },
  { value: "24/7", label: "Support" },
  { value: "5+", label: "Account Types" },
  { value: "50+", label: "Countries" }
]