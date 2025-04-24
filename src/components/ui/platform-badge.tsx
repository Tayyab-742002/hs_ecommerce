'use client'

import React from 'react'
import Image from 'next/image'
import { useColorScheme } from '@/providers/theme-provider'
import { cn } from '@/lib/utils'

interface PlatformBadgeProps {
  platformName: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'filled' | 'outline' | 'subtle'
  logoSrc?: string
  className?: string
  withName?: boolean
}

export function PlatformBadge({
  platformName,
  size = 'md',
  variant = 'filled',
  logoSrc,
  className,
  withName = true
}: PlatformBadgeProps) {
  const { getPlatformColor, getPlatformGradient } = useColorScheme()

  // Default logos if not provided
  const defaultLogos: Record<string, string> = {
    amazon: '/images/platforms/amazon-logo.png',
    ebay: '/images/platforms/ebay-logo.png',
    walmart: '/images/platforms/walmart-logo.png',
    tiktok: '/images/platforms/tiktok-logo.png',
    etsy: '/images/platforms/etsy-logo.png'
  }

  // Get platform name in lowercase for consistency
  const platformNameLower = platformName.toLowerCase()
  
  // Get platform color and logo
  const platformColor = getPlatformColor(platformNameLower)
  const platformLogo = logoSrc || defaultLogos[platformNameLower] || defaultLogos.amazon

  // Size classes
  const sizeClasses = {
    sm: 'h-6 text-xs',
    md: 'h-8 text-sm',
    lg: 'h-10 text-base'
  }
  
  // Logo size
  const logoSizes = {
    sm: { width: 16, height: 16 },
    md: { width: 20, height: 20 },
    lg: { width: 24, height: 24 }
  }

  // Padding classes
  const paddingClasses = {
    sm: withName ? 'px-2' : 'px-1',
    md: withName ? 'px-3' : 'px-1.5',
    lg: withName ? 'px-4' : 'px-2'
  }

  // Get style based on variant
  const getVariantStyle = () => {
    switch (variant) {
      case 'filled':
        return {
          background: getPlatformGradient(platformNameLower),
          color: 'white',
          border: 'none'
        }
      case 'outline':
        return {
          background: 'transparent',
          color: platformColor,
          border: `1px solid ${platformColor}`
        }
      case 'subtle':
        return {
          background: `${platformColor}15`,
          color: platformColor,
          border: 'none'
        }
      default:
        return {}
    }
  }

  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full font-medium',
        sizeClasses[size],
        paddingClasses[size],
        className
      )}
      style={getVariantStyle()}
    >
      <div className="relative flex-shrink-0 flex items-center justify-center">
        <Image
          src={platformLogo}
          alt={`${platformName} logo`}
          width={logoSizes[size].width}
          height={logoSizes[size].height}
          className="object-contain"
        />
      </div>
      
      {withName && (
        <span className="ml-1.5 mr-0.5">
          {platformName}
        </span>
      )}
    </div>
  )
}

export function PlatformBadgeGroup({
  platforms,
  size = 'sm',
  variant = 'subtle',
  className
}: {
  platforms: string[]
  size?: 'sm' | 'md' | 'lg'
  variant?: 'filled' | 'outline' | 'subtle'
  className?: string
}) {
  return (
    <div className={cn('flex flex-wrap gap-1.5', className)}>
      {platforms.map((platform) => (
        <PlatformBadge
          key={platform}
          platformName={platform}
          size={size}
          variant={variant}
          withName={true}
        />
      ))}
    </div>
  )
}
