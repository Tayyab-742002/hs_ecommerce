'use client'

import Image from 'next/image'
import { Account } from '@/lib/fallback-data/accounts'
import { CheckCircle, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PlatformBadge } from '@/components/ui/platform-badge'
import { useColorScheme } from '@/providers/theme-provider'

export function AccountCard({ account }: { account: Account }) {
  const { getPlatformColor } = useColorScheme()
  const platformColor = getPlatformColor(account.platform.name)
  
  // Get color for account status
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'var(--color-success)'
      case 'pending':
        return 'var(--color-warning)'
      case 'sold':
        return 'var(--color-destructive)'
      default:
        return 'var(--color-muted)'
    }
  }
  
  const statusColor = getStatusColor(account.status)

  return (
    <div className="bg-card rounded-xl border border-border shadow-sm overflow-hidden transition-all hover:shadow-md hover:border-primary/20">
      <div className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <div 
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ background: `${platformColor}15` }}
          >
            {account.platform.logo ? (
              <Image
                src={account.platform.logo.asset.url}
                alt={account.platform.name}
                width={32}
                height={32}
                className="rounded-full"
              />
            ) : (
              <Star className="w-6 h-6" style={{ color: platformColor }} />
            )}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold">{account.platform.name}</h3>
              <PlatformBadge 
                platformName={account.platform.name} 
                size="sm" 
                variant="subtle" 
                withName={false} 
              />
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400 capitalize">{account.category}</span>
          </div>
        </div>

        {account.metrics && (
          <div className="grid grid-cols-2 gap-4 mb-6 p-4 rounded-lg bg-background">
            {account.metrics.followers && (
              <div>
                <span className="text-xs text-gray-500 dark:text-gray-400">Followers</span>
                <p className="font-semibold">{account.metrics.followers.toLocaleString()}</p>
              </div>
            )}
            {account.metrics.engagement && (
              <div>
                <span className="text-xs text-gray-500 dark:text-gray-400">Engagement</span>
                <p className="font-semibold">{account.metrics.engagement}%</p>
              </div>
            )}
            {account.metrics.posts && (
              <div>
                <span className="text-xs text-gray-500 dark:text-gray-400">Posts</span>
                <p className="font-semibold">{account.metrics.posts}</p>
              </div>
            )}
            {account.metrics.age && (
              <div>
                <span className="text-xs text-gray-500 dark:text-gray-400">Age</span>
                <p className="font-semibold">{account.metrics.age} years</p>
              </div>
            )}
          </div>
        )}

        <ul className="space-y-3 mb-6">
          {account.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: platformColor }} />
              <span className="text-gray-700 dark:text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <span className="text-2xl font-bold" style={{ color: platformColor }}>${account.price}</span>
          <div className="flex items-center gap-3">
            <span 
              className="px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1"
              style={{ 
                backgroundColor: `${statusColor}15`,
                color: statusColor
              }}
            >
              <span 
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: statusColor }}
              ></span>
              {account.status.charAt(0).toUpperCase() + account.status.slice(1)}
            </span>
            
            <Button 
              size="sm" 
              className="px-3 text-white"
              style={{ backgroundColor: platformColor }}
              disabled={account.status !== 'available'}
            >
              {account.status === 'available' ? 'Buy Now' : 'Sold Out'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}