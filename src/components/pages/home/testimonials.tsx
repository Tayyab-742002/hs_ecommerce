'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Star } from 'lucide-react'

export function Testimonials() {
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
      transition: { duration: 0.5 }
    }
  }

  const testimonials = [
    {
      quote: "The Amazon seller account I got was perfectly set up and ready to use. Their team helped me get started quickly, and the VA services are top-notch!",
      author: "James Wilson",
      title: "E-commerce Entrepreneur",
      rating: 5,
      platformIcon: "/images/platforms/amazon-logo.png",
      platformName: "Amazon Seller",
      platformColor: "var(--color-amazon)"
    },
    {
      quote: "After my Walmart account was suspended, I thought I'd lost everything. Their reinstatement service got me back online in just 9 days. Highly recommended!",
      author: "Sarah Johnson",
      title: "Online Store Owner",
      rating: 5,
      platformIcon: "/images/platforms/walmart-logo.png",
      platformName: "Walmart Seller",
      platformColor: "var(--color-walmart)"
    },
    {
      quote: "The eBay and Etsy accounts they provided were perfect for my handmade business. Their virtual assistant helped me set up listings that really sell.",
      author: "Michael Rodriguez",
      title: "Handmade Goods Seller",
      rating: 5,
      platformIcon: "/images/platforms/etsy-logo.png",
      platformName: "Etsy & eBay Seller",
      platformColor: "var(--color-etsy)"
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
          <motion.div variants={itemVariants} className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Customer Success Stories
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            What Our Clients Say
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-foreground/70 text-lg max-w-3xl mx-auto"
          >
            Hear from satisfied sellers who have grown their businesses with our accounts, VA services, and reinstatement solutions.
          </motion.p>
        </motion.div>
        
        {/* Background decorations */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
          <div className="absolute top-1/2 -left-24 w-80 h-80 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="bg-card rounded-2xl p-8 border border-border shadow-lg relative"
            >
              {/* Quote mark decoration */}
              <div className="absolute top-6 right-6 text-6xl text-muted dark:text-gray-700 font-serif">
                &quot;
              </div>
              
              {/* Platform logo */}
              <div className="mb-6 flex items-center">
                <div 
                  className="w-8 h-8 rounded-full p-1 shadow-md mr-2 overflow-hidden relative"
                  style={{ background: `${testimonial.platformColor}20` }}
                >
                  <Image
                    src={testimonial.platformIcon}
                    alt={testimonial.platformName}
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-foreground/70">
                  {testimonial.platformName}
                </span>
              </div>
              
              {/* Rating stars */}
              <div className="flex mb-4">
                {Array(testimonial.rating).fill(0).map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-5 h-5 fill-current" 
                    style={{ color: 'var(--color-warning)' }}
                  />
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="border-l-4 pl-4 italic text-lg font-medium">
                &quot;{testimonial.quote}&quot;
              </blockquote>
              
              {/* Author info */}
              <div className="flex items-center mt-auto">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold mr-3"
                  style={{ background: `linear-gradient(135deg, ${testimonial.platformColor}, ${testimonial.platformColor}aa)` }}
                >
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-foreground/70">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
