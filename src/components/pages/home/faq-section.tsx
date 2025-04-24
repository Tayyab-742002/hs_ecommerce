'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useColorScheme } from '@/providers/theme-provider'

interface FAQ {
  question: string
  answer: React.ReactNode
  platform?: string // Optional platform association for color
}

export function FAQSection() {
  const { getPlatformColor, getPlatformGradient } = useColorScheme()
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

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

  const faqs: FAQ[] = [
    {
      question: "What types of accounts do you provide?",
      platform: "Amazon",
      answer: (
        <>
          We provide seller and buyer accounts for all major e-commerce platforms including Amazon, eBay, Walmart, TikTok, and Etsy. All accounts are available for multiple countries and regions worldwide.
        </>
      )
    },
    {
      question: "How quickly can I get my account?",
      platform: "eBay",
      answer: (
        <>
          Most accounts are delivered within 24-48 hours after payment confirmation. Some specialized accounts may take 3-5 business days. We'll provide you with a specific timeframe when you place your order.
        </>
      )
    },
    {
      question: "Are the accounts verified and ready to use?",
      platform: "Walmart",
      answer: (
        <>
          Yes, all accounts come fully verified and ready to use immediately. We handle all the verification processes including email, phone, and ID verification where required.
        </>
      )
    },
    {
      question: "What virtual assistant services do you offer?",
      platform: "TikTok",
      answer: (
        <>
          We offer a comprehensive range of VA services including listing creation and optimization, account management, customer service, inventory management, PPC campaign management, and more. Visit our <Link href="/services/va-services" className="hover:underline" style={{ color: getPlatformColor('TikTok') }}>VA Services page</Link> for more details.
        </>
      )
    },
    {
      question: "How does the account reinstatement service work?",
      platform: "Etsy",
      answer: (
        <>
          Our account reinstatement service helps sellers get their suspended or blocked accounts back online. We analyze the reason for suspension, create a professional Plan of Action (POA), and communicate with the marketplace on your behalf until your account is reinstated. Our success rate is approximately 75-85% depending on the platform and reason for suspension.
        </>
      )
    },
    {
      question: "Do you offer support after purchase?",
      platform: "Amazon",
      answer: (
        <>
          Yes, we provide 24/7 support via WhatsApp and email. Our team of experts is always available to help you with any questions or issues you may have with your accounts or services.
        </>
      )
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
            Common Questions
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Frequently Asked Questions
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-muted-foreground text-lg max-w-3xl mx-auto"
          >
            Find answers to commonly asked questions about our services. If you can't find what you're looking for, feel free to contact us.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto divide-y divide-border"
        >
          {faqs.map((faq, index) => {
            const platformColor = faq.platform ? getPlatformColor(faq.platform) : '';
            
            return (
              <motion.div 
                key={index}
                variants={itemVariants}
                className={`py-6 ${activeIndex === index ? 'bg-card/50 rounded-xl px-4' : ''} transition-all duration-200`}
                style={activeIndex === index ? {
                  borderLeft: `2px solid ${platformColor}`,
                  boxShadow: `0 4px 20px ${platformColor}10`
                } : {}}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center w-full text-left focus:outline-none"
                >
                  <h3 className="text-lg md:text-xl font-medium">
                    {faq.question}
                  </h3>
                  <span className="ml-6 flex-shrink-0" style={{ color: platformColor }}>
                    {activeIndex === index ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </span>
                </button>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 text-base text-muted-foreground space-y-2"
                  >
                    {typeof faq.answer === 'string' ? (
                      <p>{faq.answer}</p>
                    ) : (
                      faq.answer
                    )}
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6">
            Still have questions? We're here to help.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="rounded-full px-8 text-white"
            style={{ background: getPlatformGradient('Amazon') }}
          >
            <Link href="/contact">
              Contact Us
            </Link>
          </Button>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 -right-24 w-64 h-64 rounded-full blur-3xl opacity-5"
          style={{ background: getPlatformGradient('eBay') }}
        ></div>
        <div 
          className="absolute bottom-1/4 -left-24 w-64 h-64 rounded-full blur-3xl opacity-5"
          style={{ background: getPlatformGradient('TikTok') }}
        ></div>
      </div>
    </section>
  )
}
