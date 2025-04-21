'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Clock, HeadphonesIcon, Globe, Award, ThumbsUp } from 'lucide-react'

export function WhyChooseUs() {
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
      color: "text-blue-500",
      bgColor: "bg-blue-100 dark:bg-blue-900/30",
      title: "Verified Accounts",
      description: "All accounts are fully verified and ready to use immediately upon delivery."
    },
    {
      icon: <Clock className="w-10 h-10" />,
      color: "text-green-500",
      bgColor: "bg-green-100 dark:bg-green-900/30",
      title: "Fast Delivery",
      description: "Most accounts are delivered within 24-48 hours after payment confirmation."
    },
    {
      icon: <HeadphonesIcon className="w-10 h-10" />,
      color: "text-indigo-500",
      bgColor: "bg-indigo-100 dark:bg-indigo-900/30",
      title: "24/7 Support",
      description: "Our team is available round the clock via WhatsApp and email for any questions or issues."
    },
    {
      icon: <Globe className="w-10 h-10" />,
      color: "text-purple-500",
      bgColor: "bg-purple-100 dark:bg-purple-900/30",
      title: "Global Coverage",
      description: "We provide accounts for all countries and regions worldwide."
    },
    {
      icon: <Award className="w-10 h-10" />,
      color: "text-orange-500",
      bgColor: "bg-orange-100 dark:bg-orange-900/30",
      title: "Expert Team",
      description: "Our team consists of e-commerce specialists with years of platform experience."
    },
    {
      icon: <ThumbsUp className="w-10 h-10" />,
      color: "text-red-500",
      bgColor: "bg-red-100 dark:bg-red-900/30",
      title: "High Success Rate",
      description: "75-85% success rate for account reinstatement services across platforms."
    }
  ]

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
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
            className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto"
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
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`${feature.bgColor} ${feature.color} p-4 rounded-full mb-6`}>
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              
              <p className="text-gray-600 dark:text-gray-300">
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
          className="mt-16 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={itemVariants} className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5+ Years</div>
              <p className="text-gray-600 dark:text-gray-300">Industry Experience</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">2,500+</div>
              <p className="text-gray-600 dark:text-gray-300">Satisfied Clients</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <p className="text-gray-600 dark:text-gray-300">Countries Served</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
