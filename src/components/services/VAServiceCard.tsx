'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Shield } from 'lucide-react'
import { useState } from 'react'
import { PlatformBadge } from '@/components/ui/platform-badge'
import { useColorScheme } from '@/providers/theme-provider'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog'
import { VAService as GlobalVAService } from '@/types'

// Local interface that extends the global one but makes certain fields required for this component
interface VAService extends Omit<GlobalVAService, 'description' | 'price'> {
  description: string; // Required in this component
  price: string; // Required in this component
  platformName?: string; // Added back this missing property
}

export function VAServiceCard({ service }: { service: VAService }) {
  const [open, setOpen] = useState(false)
  const { getPlatformColor, getPlatformGradient } = useColorScheme()

  // Default to primary color if platform is not specified
  const platformName = service.platformName || 'primary'
  const platformColor = getPlatformColor(platformName)
  const platformGradient = getPlatformGradient(platformName)

  return (
    <div className="bg-card rounded-xl border border-border shadow-sm overflow-hidden transition-all hover:shadow-md hover:border-primary/20">
      <div className="p-6">
        <div className="flex items-center gap-4 mb-5">
          {service.icon ? (
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center shadow-sm"
              style={{ background: `${platformColor}15` }}
            >
              <Image
                src={service.icon.asset.url}
                alt={service.title}
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
          ) : (
            <div
              className="w-12 h-12 flex items-center justify-center rounded-lg shadow-sm"
              style={{ background: `${platformColor}15` }}
            >
              <Shield
                className="w-6 h-6"
                style={{ color: platformColor }}
              />
            </div>
          )}
          <div>
            <h3 className="text-lg font-semibold">{service.title}</h3>
            {service.platformName && (
              <PlatformBadge
                platformName={service.platformName}
                size="sm"
                variant="subtle"
                withName={true}
              />
            )}
          </div>
        </div>

        <p className="text-gray-500 dark:text-gray-400 mb-5 min-h-[4rem] text-sm">
          {service.description}
        </p>

        <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
          <div
            className="text-xl font-bold"
            style={{ color: platformColor }}
          >
            {service.price}
          </div>
          <Button
            onClick={() => setOpen(true)}
            className="text-white"
            style={{ background: platformGradient }}
            size="sm"
          >
            Inquire Now
          </Button>
        </div>

        {/* Modern Dialog Component */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Contact Us About {service.title}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Please contact us via WhatsApp or phone to discuss this service. Our team is available 24/7 to assist you.
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
    </div>
  )
}
