'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, ShoppingCart, UserCheck, LineChart, ShieldCheck } from 'lucide-react'
import { useColorScheme } from '@/providers/theme-provider'

export function ServicesShowcase() {
  const { getPlatformColor, getPlatformGradient } = useColorScheme()
  
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

  const services = [
    {
      title: "Account Services",
      description: "We provide professional seller and buyer accounts for all major e-commerce platforms, verified and ready to use.",
      icon: <ShoppingCart className="w-6 h-6" />,
      platform: 'Amazon',
      link: "/platforms"
    },
    {
      title: "VA Services",
      description: "Our experienced virtual assistants help manage your e-commerce business operations, listings, and customer service.",
      icon: <UserCheck className="w-6 h-6" />,
      platform: 'eBay',
      link: "/services/va-services"
    },
    {
      title: "Performance Optimization",
      description: "Improve your store's performance with our specialized optimization services for all marketplace platforms.",
      icon: <LineChart className="w-6 h-6" />,
      platform: 'TikTok',
      link: "/services/va-services"
    },
    {
      title: "Account Reinstatement",
      description: "Get your suspended or blocked accounts back online with our specialized reinstatement services.",
      icon: <ShieldCheck className="w-6 h-6" />,
      platform: 'Walmart',
      link: "/services/reinstatement"
    }
  ]

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
          <motion.div variants={itemVariants} className="inline-flex items-center px-4 py-1.5 rounded-full border border-border bg-card/80 backdrop-blur-sm text-sm font-medium mb-4">
            Our Comprehensive Services
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            E-commerce Solutions for Sellers
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-muted-foreground text-lg max-w-3xl mx-auto"
          >
            From account setup to management and optimization, we provide end-to-end services to help you succeed on Amazon, eBay, Walmart, TikTok, and Etsy.
          </motion.p>
        </motion.div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="bg-card rounded-2xl p-8 border border-border group hover:shadow-xl transition-all duration-300"
              style={{ 
                borderColor: `${getPlatformColor(service.platform)}30`,
                boxShadow: `0 4px 20px ${getPlatformColor(service.platform)}05`
              }}
            >
              <div className="flex items-start gap-5">
                <div className="p-4 rounded-xl" 
                  style={{ 
                    backgroundColor: `${getPlatformColor(service.platform)}10`,
                    color: getPlatformColor(service.platform)
                  }}
                >
                  {service.icon}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  
                  <Link 
                    href={service.link} 
                    className="inline-flex items-center font-medium group-hover:underline"
                    style={{ color: getPlatformColor(service.platform) }}
                  >
                    Learn more <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured service details */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            <div className="inline-block px-4 py-1.5 rounded-full border border-border bg-card/80 backdrop-blur-sm text-sm font-medium mb-4">
              Most Popular Service
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Account Reinstatement Service</h3>
            
            <p className="text-muted-foreground mb-6">
              Getting your account suspended can be devastating for your business. Our specialized team helps you get back online fast with our proven reinstatement process.
            </p>
            
            <ul className="space-y-3 mb-8">
              {[
                "Complete account analysis and violation identification",
                "Professional Plan of Action (POA) creation",
                "Direct communication with marketplace support",
                "Ongoing guidance and support until resolution",
                "Average 75-85% success rate across platforms"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-1 mr-3"
                    style={{ 
                      backgroundColor: `${getPlatformColor('Amazon')}20`,
                      color: getPlatformColor('Amazon')
                    }}
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            
            <Button 
              asChild 
              size="lg" 
              className="rounded-full px-8 text-white"
              style={{ background: getPlatformGradient('Amazon') }}
            >
              <Link href="/services/reinstatement">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
          
          <motion.div variants={itemVariants} className="relative order-1 lg:order-2">
            <div className="relative h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/account-reinstatement.jpg"
                alt="Account Reinstatement Service"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: getPlatformColor('Amazon') }}></div>
                  <span className="font-medium">Success Rate: 75-85%</span>
                </div>
                <h4 className="text-xl font-bold mb-2">Get Your Account Back</h4>
                <p className="text-white/80 text-sm">Fast turnaround times from 3 to 21 days depending on platform</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full -z-10" 
              style={{ backgroundColor: `${getPlatformColor('Walmart')}15` }}></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full -z-10"
              style={{ backgroundColor: `${getPlatformColor('eBay')}15` }}></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
