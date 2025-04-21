"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface Platform {
  _id: string
  name: string
  slug: string
  logo: {
    asset: {
      url: string
    }
  }
  features: {
    title: string
    icon?: {
      asset: {
        url: string
      }
    }
  }[]
}

interface FeaturedPlatformsProps {
  platforms: Platform[]
}

export function FeaturedPlatforms({ platforms }: FeaturedPlatformsProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  return (
    <section className="py-20 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Supported Platforms
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            We provide professional services across major e-commerce platforms to help you succeed in your online business
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {platforms.map((platform) => (
            <motion.div
              key={platform._id}
              variants={itemVariants}
              className="group relative bg-card rounded-xl p-6 hover:shadow-xl transition-all duration-300 border border-border"
            >
              <div className="flex items-center gap-4 mb-6">
                {platform.logo && (
                  <div className="relative w-12 h-12">
                    <Image
                      src={platform.logo.asset.url}
                      alt={platform.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
                <h3 className="text-xl font-semibold">{platform.name}</h3>
              </div>

              <ul className="space-y-3 mb-6">
                {platform.features.slice(0, 3).map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    {feature.icon ? (
                      <Image
                        src={feature.icon.asset.url}
                        alt={feature.title}
                        width={20}
                        height={20}
                      />
                    ) : (
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    )}
                    <span className="text-muted-foreground">{feature.title}</span>
                  </li>
                ))}
              </ul>

              <Link 
                href={`/platforms/${platform.slug}`}
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
              >
                Learn more
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>

              <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/50 rounded-xl transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}