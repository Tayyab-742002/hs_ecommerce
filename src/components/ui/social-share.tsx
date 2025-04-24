'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Share2, X, Copy, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface SocialShareProps {
  url?: string
  title?: string
  description?: string
  compact?: boolean
  platforms?: ('facebook' | 'twitter' | 'linkedin' | 'whatsapp' | 'telegram' | 'email' | 'copy')[]
}

export function SocialShare({
  url,
  title = 'H&S Ecommerce Agency',
  description = 'Professional services for Amazon, eBay, Walmart, TikTok, and Etsy sellers',
  compact = false,
  platforms = ['facebook', 'twitter', 'linkedin', 'whatsapp', 'telegram', 'copy']
}: SocialShareProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  
  // Use current URL if not provided
  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '')
  
  const socialLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${title} ${shareUrl}`)}`,
    telegram: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`,
    email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`${description}\n\n${shareUrl}`)}`
  }
  
  const socialIcons = {
    facebook: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
      </svg>
    ),
    twitter: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
    linkedin: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
      </svg>
    ),
    whatsapp: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" clipRule="evenodd" />
      </svg>
    ),
    telegram: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.717-.48 2.416-.675 3.573l-.043.21c-.527 2.762-.797 3.867-.797 3.867s-.059.167-.167.188c-.93.018-.31-.034-.31-.034s-1.823-.71-2.111-.822c-.21-.084-.348-.233-.28-.369.058-.084.246-.195.246-.195s2.823-1.791 2.953-1.992c.039-.083-.02-.118-.095-.084-1.08.48-3.388 1.35-3.735 1.476a.618.618 0 0 1-.186.041c-.096-.007-.183-.041-.282-.077-.37-.111-1.34-.445-1.34-.445s-.37-.18-.24-.365c.055-.082.224-.164.224-.164s.854-.36 1.773-.813c1.665-.81 2.711-1.35 3.294-1.651.567-.29 1.005-.122 1.515.073.21.084.395.334.205.716z" />
      </svg>
    ),
    email: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    copy: copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />
  }
  
  const handleShare = (platform: string) => {
    if (platform === 'copy') {
      navigator.clipboard.writeText(shareUrl).then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      })
      return
    }
    
    // Open share link in a new window
    window.open(
      socialLinks[platform as keyof typeof socialLinks], 
      'share-dialog', 
      'width=800,height=600'
    )
  }
  
  const socialColors = {
    facebook: 'bg-[#1877F2] hover:bg-[#166FE5]',
    twitter: 'bg-[#1DA1F2] hover:bg-[#0c8ad6]',
    linkedin: 'bg-[#0A66C2] hover:bg-[#0959ab]',
    whatsapp: 'bg-[#25D366] hover:bg-[#21bd5b]',
    telegram: 'bg-[#26A5E4] hover:bg-[#1e96d1]',
    email: 'bg-gray-600 hover:bg-gray-700',
    copy: copied ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-600 hover:bg-gray-700'
  }
  
  return (
    <div className="relative inline-block">
      <Button
        size="sm"
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
        className="gap-2"
      >
        <Share2 className="h-4 w-4" />
        {!compact && <span>Share</span>}
      </Button>
      
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              className="absolute bottom-full mb-2 right-0 z-50 bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-200 dark:border-gray-700 py-4 px-2 w-[280px]"
            >
              <div className="flex justify-between items-center border-b pb-2 px-2 mb-3">
                <h3 className="font-medium">Share this page</h3>
                <button
                  className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              
              <div className="grid grid-cols-4 gap-3 px-2">
                {platforms.map((platform) => (
                  <button
                    key={platform}
                    className={`flex flex-col items-center p-3 rounded-lg text-white ${socialColors[platform]}`}
                    onClick={() => handleShare(platform)}
                  >
                    {socialIcons[platform as keyof typeof socialIcons]}
                    <span className="text-xs mt-1 font-medium">
                      {platform === 'copy' ? (copied ? 'Copied!' : 'Copy') : platform.charAt(0).toUpperCase() + platform.slice(1)}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
