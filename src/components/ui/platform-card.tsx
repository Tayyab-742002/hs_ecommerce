'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { PlatformBadge } from '@/components/ui/platform-badge'
import { useColorScheme } from '@/providers/theme-provider'
import { CheckIcon, ArrowRightIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface PlatformCardProps {
  platform: {
    name: string
    slug: string
    color?: string
    logo?: {
      asset: {
        url: string
      }
    }
    accountCategories?: string[]
    features?: {
      title: string
      description?: string
    }[]
  }
  variant?: 'default' | 'compact' | 'featured'
  className?: string
  showFeatures?: boolean
  animationDelay?: number
}

export function PlatformCard({
  platform,
  variant = 'default',
  className,
  showFeatures = true,
  animationDelay = 0
}: PlatformCardProps) {
  const { getPlatformColor, getPlatformGradient } = useColorScheme()
  
  const platformName = platform.name.toLowerCase()
  const platformColor = platform.color || getPlatformColor(platformName)
  const platformGradient = getPlatformGradient(platformName)
  
  // Animation variants
  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20 
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        delay: animationDelay
      }
    }
  }
  
  // Features to display (limit based on variant)
  const displayFeatures = showFeatures && platform.features 
    ? (variant === 'compact' 
        ? platform.features.slice(0, 2) 
        : platform.features) 
    : []
  
  // Account categories
  const accountCategories = platform.accountCategories || []
  
  // Card content based on variant
  const renderCardContent = () => {
    switch (variant) {
      case 'compact':
        return (
          <>
            <div className="flex items-center gap-3 mb-4">
              {platform.logo && (
                <div 
                  className="h-10 w-10 rounded-full flex items-center justify-center"
                  style={{ background: `${platformColor}20` }}
                >
                  <div className="relative h-6 w-6">
                    <Image
                      src={platform.logo.asset.url}
                      alt={platform.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              )}
              <h3 className="text-lg font-semibold">{platform.name}</h3>
            </div>
            
            {displayFeatures.length > 0 && (
              <ul className="space-y-2 mb-4">
                {displayFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckIcon 
                      className="h-4 w-4 mt-1 flex-shrink-0" 
                      style={{ color: platformColor }}
                    />
                    <span className="text-sm">{feature.title}</span>
                  </li>
                ))}
              </ul>
            )}
            
            <div className="mt-auto">
              <Link href={`/platforms/${platform.slug}`}>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  style={{ borderColor: platformColor, color: platformColor }}
                >
                  View Details
                </Button>
              </Link>
            </div>
          </>
        )
        
      case 'featured':
        return (
          <>
            <div 
              className="p-5 flex items-center gap-4"
              style={{ 
                background: platformGradient,
                borderRadius: '0.75rem 0.75rem 0 0'
              }}
            >
              {platform.logo && (
                <div className="h-14 w-14 bg-white rounded-full p-3 shadow-md">
                  <div className="relative h-full w-full">
                    <Image
                      src={platform.logo.asset.url}
                      alt={platform.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              )}
              <div>
                <h3 className="text-xl font-bold text-white">{platform.name}</h3>
                <p className="text-sm text-white/80">Professional Services</p>
              </div>
            </div>
            
            <div className="p-5">
              {accountCategories.length > 0 && (
                <div className="mb-5">
                  <h4 className="text-sm font-medium mb-2">Account Types</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {accountCategories.map((category, index) => (
                      <PlatformBadge
                        key={index}
                        platformName={platform.name}
                        size="sm"
                        variant="subtle"
                        withName={false}
                      />
                    ))}
                  </div>
                </div>
              )}
              
              {displayFeatures.length > 0 && (
                <div className="mb-5">
                  <h4 className="text-sm font-medium mb-2">Key Features</h4>
                  <ul className="space-y-2">
                    {displayFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckIcon 
                          className="h-4 w-4 mt-1 flex-shrink-0" 
                          style={{ color: platformColor }}
                        />
                        <div>
                          <span className="text-sm font-medium">{feature.title}</span>
                          {feature.description && (
                            <p className="text-xs text-muted-foreground">{feature.description}</p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <Link href={`/platforms/${platform.slug}`}>
                <Button
                  className="w-full gap-1"
                  style={{ 
                    background: platformGradient,
                    border: 'none'
                  }}
                >
                  Explore {platform.name}
                  <ArrowRightIcon className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </>
        )
        
      default: // default variant
        return (
          <>
            <div className="p-5 flex items-center justify-between border-b">
              <div className="flex items-center gap-3">
                {platform.logo && (
                  <div 
                    className="h-10 w-10 rounded-full flex items-center justify-center"
                    style={{ background: `${platformColor}15` }}
                  >
                    <div className="relative h-6 w-6">
                      <Image
                        src={platform.logo.asset.url}
                        alt={platform.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                )}
                <h3 className="text-lg font-semibold">{platform.name}</h3>
              </div>
              
              {accountCategories.length > 0 && (
                <PlatformBadge
                  platformName={platform.name}
                  size="sm"
                  variant="subtle"
                  withName={false}
                />
              )}
            </div>
            
            <div className="p-5">
              {displayFeatures.length > 0 && (
                <ul className="space-y-3 mb-5">
                  {displayFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckIcon 
                        className="h-4 w-4 mt-1 flex-shrink-0" 
                        style={{ color: platformColor }}
                      />
                      <div>
                        <span className="text-sm font-medium">{feature.title}</span>
                        {feature.description && (
                          <p className="text-xs text-muted-foreground">{feature.description}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
              
              <Link href={`/platforms/${platform.slug}`}>
                <Button
                  variant="outline"
                  className="w-full gap-1"
                  style={{ borderColor: platformColor, color: platformColor }}
                >
                  View Details
                  <ArrowRightIcon className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </>
        )
    }
  }
  
  // Card sizes based on variant
  const cardSizes = {
    compact: 'h-64',
    featured: 'h-auto',
    default: 'h-auto'
  }
  
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={cn(
        'bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col',
        cardSizes[variant],
        className
      )}
    >
      {renderCardContent()}
    </motion.div>
  )
}

export function PlatformCardGrid({
  platforms,
  variant = 'default',
  showFeatures = true,
  className
}: {
  platforms: PlatformCardProps['platform'][]
  variant?: PlatformCardProps['variant']
  showFeatures?: boolean
  className?: string
}) {
  return (
    <div className={cn(
      'grid gap-6',
      variant === 'compact' 
        ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4' 
        : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      className
    )}>
      {platforms.map((platform, index) => (
        <PlatformCard
          key={platform.slug}
          platform={platform}
          variant={variant}
          showFeatures={showFeatures}
          animationDelay={index * 0.1}
        />
      ))}
    </div>
  )
}
