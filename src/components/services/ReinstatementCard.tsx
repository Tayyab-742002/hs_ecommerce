'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useState } from 'react'
import { CheckCircle, Shield } from 'lucide-react'
import { useColorScheme } from '@/providers/theme-provider'
import { PlatformBadge } from '@/components/ui/platform-badge'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog'

interface ReinstatementService {
  _id: string
  title: string
  slug: string
  platform: {
    _id: string
    name: string
    logo?: {
      asset: {
        url: string
      }
    }
  }
  description?: string
  image?: {
    asset: {
      url: string
    }
  }
  features?: string[]
  successRate?: string
  turnaroundTime?: string
  price?: string
}

export function ReinstatementCard({ service }: { service: ReinstatementService }) {
  const [open, setOpen] = useState(false)
  const { getPlatformColor, getPlatformGradient } = useColorScheme()
  
  // Get platform color
  const platformColor = getPlatformColor(service.platform.name)
  const platformGradient = getPlatformGradient(service.platform.name)

  return (
    <div className="bg-card rounded-xl border border-border shadow-sm overflow-hidden transition-all hover:shadow-md">
      {service.image ? (
        <div className="h-48 overflow-hidden">
          <Image
            src={service.image.asset.url}
            alt={service.title}
            width={500}
            height={300}
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
        </div>
      ) : (
        <div 
          className="h-48 flex items-center justify-center"
          style={{ 
            background: `linear-gradient(135deg, ${platformColor}15, ${platformColor}05)` 
          }}
        >
          <div className="text-center p-6">
            <div className="flex justify-center mb-4">
              {service.platform.logo ? (
                <div
                  className="h-20 w-20 rounded-full flex items-center justify-center shadow-sm p-4"
                  style={{ 
                    background: platformGradient
                  }}
                >
                  <Image
                    src={service.platform.logo.asset.url}
                    alt={service.platform.name}
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>
              ) : (
                <div
                  className="h-20 w-20 rounded-full flex items-center justify-center shadow-sm text-white"
                  style={{ 
                    background: platformGradient
                  }}
                >
                  <Shield className="h-8 w-8" />
                </div>
              )}
            </div>
            <div className="flex flex-col items-center">
              <PlatformBadge 
                platformName={service.platform.name} 
                size="sm" 
                variant="subtle" 
              />
              <h3 className="text-xl font-semibold mt-2">{service.title}</h3>
            </div>
          </div>
        </div>
      )}

      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          {service.platform.logo && (
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: `${platformColor}15` }}
            >
              <Image
                src={service.platform.logo.asset.url}
                alt={service.platform.name}
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
          )}
          <div>
            <h3 className="text-lg font-semibold">{service.title}</h3>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Reinstatement for {service.platform.name}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4 p-3 rounded-lg bg-background">
          {service.successRate && (
            <div>
              <span className="text-xs text-gray-500 dark:text-gray-400">Success Rate</span>
              <p 
                className="font-semibold"
                style={{ color: 'var(--color-success)' }}
              >
                {service.successRate}
              </p>
            </div>
          )}
          
          {service.turnaroundTime && (
            <div>
              <span className="text-xs text-gray-500 dark:text-gray-400">Turnaround Time</span>
              <p className="font-semibold">{service.turnaroundTime}</p>
            </div>
          )}
        </div>

        <div className="mt-4 space-y-2">
          {service.features && service.features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <CheckCircle 
                className="w-4 h-4 mt-0.5 flex-shrink-0" 
                style={{ color: platformColor }}
              />
              <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
          {service.price && (
            <span 
              className="text-xl font-bold"
              style={{ color: platformColor }}
            >
              {service.price}
            </span>
          )}
          
          <div className="flex gap-3">
            <Button 
              asChild
              variant="outline"
              size="sm"
              className="text-sm"
              style={{ color: platformColor, borderColor: `${platformColor}40` }}
            >
              <Link href={`/services/reinstatement/${service.slug}`}>
                Details
              </Link>
            </Button>
            
            <Button 
              className="text-sm text-white"
              size="sm"
              style={{ background: platformGradient }}
              onClick={() => setOpen(true)}
            >
              Contact
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Contact Us About {service.title}</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Please contact us via WhatsApp or phone to discuss your {service.platform.name} account reinstatement. Our team specializes in restoring suspended accounts.
            </p>
            
            <div className="space-y-3 mt-2">
              <a 
                href="https://wa.me/923010510316" 
                className="flex items-center p-3 rounded-lg transition-all"
                style={{ 
                  background: `var(--color-success)20`,
                  color: 'var(--color-success)'
                }}
                onMouseOver={(e) => e.currentTarget.style.opacity = '0.9'}
                onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24"
                  className="w-5 h-5 mr-3"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                +92 301 0510316 (WhatsApp)
              </a>
              
              <a 
                href="tel:+447955426807" 
                className="flex items-center p-3 rounded-lg transition-all"
                style={{ 
                  background: `var(--color-info)20`,
                  color: 'var(--color-info)'
                }}
                onMouseOver={(e) => e.currentTarget.style.opacity = '0.9'}
                onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 mr-3"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                +44 7955 426807
              </a>
            </div>
          </div>
          
          <DialogFooter>
            <Button
              onClick={() => setOpen(false)}
              style={{ background: platformGradient }}
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
