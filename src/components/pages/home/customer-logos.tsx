'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface CustomerLogosProps {
  title?: string
  description?: string
  logos?: Array<{
    name: string
    url: string
    alt: string
  }>
}

export function CustomerLogos({
  title = "Trusted by Sellers Worldwide",
  description = "Join thousands of successful e-commerce businesses using our professional services",
  logos
}: CustomerLogosProps) {
  // Default logos if none provided
  const defaultLogos = [
    // These would be replaced with actual customer logos
    { name: 'Customer 1', url: '/images/brands/customer1.svg', alt: 'Customer 1 Logo' },
    { name: 'Customer 2', url: '/images/brands/customer2.svg', alt: 'Customer 2 Logo' },
    { name: 'Customer 3', url: '/images/brands/customer3.svg', alt: 'Customer 3 Logo' },
    { name: 'Customer 4', url: '/images/brands/customer4.svg', alt: 'Customer 4 Logo' },
    { name: 'Customer 5', url: '/images/brands/customer5.svg', alt: 'Customer 5 Logo' },
    { name: 'Customer 6', url: '/images/brands/customer6.svg', alt: 'Customer 6 Logo' },
  ]

  const displayLogos = logos || defaultLogos

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  // Create a placeholder component since we're not using real images
  const LogoPlaceholder = ({ name }: { name: string }) => (
    <div className="bg-gray-100 dark:bg-gray-800 h-16 rounded-lg flex items-center justify-center px-6">
      <span className="text-gray-500 dark:text-gray-400 font-semibold">{name}</span>
    </div>
  )

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
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
            className="text-2xl md:text-3xl font-bold mb-4"
          >
            {title}
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center"
        >
          {displayLogos.map((logo, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex justify-center"
            >
              {logo.url.includes('/images/brands/') ? (
                // Use placeholder for demo purposes since we don't have real images
                <LogoPlaceholder name={logo.name} />
              ) : (
                <div className="h-16 relative w-full">
                  <Image
                    src={logo.url}
                    alt={logo.alt}
                    fill
                    className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
