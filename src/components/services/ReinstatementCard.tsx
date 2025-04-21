'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useState } from 'react'

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
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
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
        <div className="h-48 bg-gradient-to-r from-primary/20 to-primary/10 flex items-center justify-center">
          <div className="text-center p-6">
            <div className="flex justify-center mb-4">
              {service.platform.logo ? (
                <Image
                  src={service.platform.logo.asset.url}
                  alt={service.platform.name}
                  width={80}
                  height={80}
                  className="h-16 w-auto"
                />
              ) : (
                <span className="text-4xl font-bold text-primary">{service.platform.name.charAt(0)}</span>
              )}
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
          </div>
        </div>
      )}

      <div className="p-6">
        <div className="flex items-center mb-4">
          {service.platform.logo && (
            <Image
              src={service.platform.logo.asset.url}
              alt={service.platform.name}
              width={30}
              height={30}
              className="mr-2"
            />
          )}
          <h3 className="text-xl font-semibold">{service.title}</h3>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          {service.successRate && (
            <div>
              <span className="text-sm text-gray-500">Success Rate</span>
              <p className="font-semibold text-green-600">{service.successRate}</p>
            </div>
          )}
          
          {service.turnaroundTime && (
            <div>
              <span className="text-sm text-gray-500">Turnaround Time</span>
              <p className="font-semibold">{service.turnaroundTime}</p>
            </div>
          )}
        </div>

        <div className="mt-4 space-y-2">
          {service.features && service.features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex items-start">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-sm text-gray-600">{feature}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between">
          {service.price && <span className="text-2xl font-bold">{service.price}</span>}
          
          <div className="flex space-x-2">
            <Button 
              asChild
              variant="outline"
              className="text-sm"
            >
              <Link href={`/services/reinstatement/${service.slug}`}>
                Learn More
              </Link>
            </Button>
            
            <Button 
              className="text-sm"
              onClick={() => setIsContactOpen(true)}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4">
            <h3 className="text-xl font-semibold mb-2">Contact Us About {service.title}</h3>
            <p className="text-gray-600 mb-4">
              Please contact us via WhatsApp or phone to discuss your account reinstatement:
            </p>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24"
                  className="w-5 h-5 mr-2 text-green-600"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <a href="https://wa.me/923010510316" className="text-blue-600 hover:underline">
                  +92 301 0510316 (WhatsApp)
                </a>
              </div>
              <div className="flex items-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 mr-2 text-gray-600"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                <a href="tel:+447955426807" className="text-blue-600 hover:underline">
                  +44 7955 426807
                </a>
              </div>
            </div>
            
            <div className="flex justify-end">
              <Button 
                variant="outline"
                onClick={() => setIsContactOpen(false)}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
