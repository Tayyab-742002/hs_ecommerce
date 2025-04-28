'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Clock, HeadphonesIcon, Globe, Award, ThumbsUp } from 'lucide-react'
import { useColorScheme } from '@/providers/theme-provider'

export function WhyChooseUs() {
  const { getPlatformColor } = useColorScheme()


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

  const features = [
    {
      icon: <ShieldCheck className="w-10 h-10" />,
      platform: 'Amazon',
      title: "Verified Accounts",
      description: "All accounts are fully verified and ready to use immediately upon delivery."
    },
    {
      icon: <Clock className="w-10 h-10" />,
      platform: 'eBay',
      title: "Fast Delivery",
      description: "Most accounts are delivered within 24-48 hours after payment confirmation."
    },
    {
      icon: <HeadphonesIcon className="w-10 h-10" />,
      platform: 'Walmart',
      title: "24/7 Support",
      description: "Our team is available round the clock via WhatsApp and email for any questions or issues."
    },
    {
      icon: <Globe className="w-10 h-10" />,
      platform: 'TikTok',
      title: "Global Coverage",
      description: "We provide accounts for all countries and regions worldwide."
    },
    {
      icon: <Award className="w-10 h-10" />,
      platform: 'Etsy',
      title: "Expert Team",
      description: "Our team consists of e-commerce specialists with years of platform experience."
    },
    {
      icon: <ThumbsUp className="w-10 h-10" />,
      platform: 'Amazon',
      title: "High Success Rate",
      description: "75-85% success rate for account reinstatement services across platforms."
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center px-4 py-1.5 rounded-full border border-border bg-card/80 backdrop-blur-sm text-sm font-medium mb-4">
            Our Advantages
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Why Choose H&S Ecommerce
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-muted-foreground text-lg max-w-3xl mx-auto"
          >
            We deliver exceptional value and service to help your e-commerce business succeed across all major platforms.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card rounded-xl p-8 shadow-lg  flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
              style={{
                borderColor: `${getPlatformColor(feature.platform)}30`,
                boxShadow: `0 4px 20px ${getPlatformColor(feature.platform)}10`
              }}
            >
              <div className="p-4 rounded-full mb-6"
                style={{
                  backgroundColor: `${getPlatformColor(feature.platform)}10`,
                  color: getPlatformColor(feature.platform)
                }}
              >
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>

              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional trust indicators */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 bg-card rounded-2xl p-8 shadow-lg border border-border relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            <motion.div variants={itemVariants} className="text-center">
              <div className="text-4xl font-bold mb-2"
                style={{ color: getPlatformColor('Amazon') }}>
                5+ Years
              </div>
              <p className="text-muted-foreground">Industry Experience</p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <div className="text-4xl font-bold mb-2"
                style={{ color: getPlatformColor('eBay') }}>
                2,500+
              </div>
              <p className="text-muted-foreground">Satisfied Clients</p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <div className="text-4xl font-bold mb-2"
                style={{ color: getPlatformColor('Walmart') }}>
                50+
              </div>
              <p className="text-muted-foreground">Countries Served</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
