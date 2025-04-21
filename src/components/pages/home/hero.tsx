"use client"

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface HeroProps {
  heading: string
  subheading?: string
  backgroundImage?: {
    asset: {
      url: string
    }
  }
  cta?: {
    text: string
    link: string
  }
  overlay?: {
    enabled: boolean
    opacity: number
  }
}

export function Hero({ heading, subheading, backgroundImage, cta, overlay }: HeroProps) {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <div className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
      >
        {backgroundImage ? (
          <Image
            src={backgroundImage.asset.url || '/images/hero-bg.jpg'}
            alt={heading}
            fill
            className="object-cover"
            priority
            quality={100}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary-foreground" />
        )}
      </motion.div>

      {/* Overlay with Gradient */}
      {overlay?.enabled && (
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"
          style={{ opacity: overlay.opacity }}
        />
      )}

      {/* Content */}
      <motion.div
        className="container relative z-10 mx-auto px-4"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            variants={fadeIn}
          >
            {heading}
          </motion.h1>

          {subheading && (
            <motion.p
              className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed"
              variants={fadeIn}
            >
              {subheading}
            </motion.p>
          )}

          {cta && (
            <motion.div
              variants={fadeIn}
              className="flex justify-center gap-4"
            >
              <Button
                size="lg"
                asChild
                className="text-lg px-8 py-6 rounded-full hover:scale-105 transition-transform"
              >
                <Link href={cta.link}>
                  {cta.text}
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-lg px-8 py-6 rounded-full bg-white/10 backdrop-blur-sm hover:scale-105 transition-transform"
              >
                <Link href="/platforms">
                  Learn More
                </Link>
              </Button>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />

      {/* Animated Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
        </div>
      </motion.div>
    </div>
  )
}
