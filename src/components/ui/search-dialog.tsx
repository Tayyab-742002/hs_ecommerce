'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Search,
  X,
  ShoppingCart,
  UserCheck,
  ShieldCheck
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface SearchResult {
  id: string
  title: string
  description: string
  url: string
  type: "platform" | "account" | "service" | "va" | "reinstatement" | string
  icon?: React.ReactNode
  platformName?: string
  platformIcon?: string
}

export function SearchDialog() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)

  // Close on escape key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }
    
    // Shortcut to open search with Ctrl+K or Command+K
    const handleShortcut = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault()
        setIsOpen(prev => !prev)
      }
    }
    
    window.addEventListener('keydown', handleEsc)
    window.addEventListener('keydown', handleShortcut)
    
    return () => {
      window.removeEventListener('keydown', handleEsc)
      window.removeEventListener('keydown', handleShortcut)
    }
  }, [])

  // Dummy search function for demo purposes
  // In a real implementation, you would connect to your actual search API
  const performSearch = (query: string) => {
    setIsLoading(true)
    
    // Simulate API call delay
    setTimeout(() => {
      if (!query.trim()) {
        setSearchResults([])
        setIsLoading(false)
        return
      }
      
      const lowerQuery = query.toLowerCase()
      
      // Mock results based on query
      const results: SearchResult[] = [
        {
          id: 'amazon',
          title: 'Amazon',
          description: 'Seller and buyer accounts for Amazon marketplace',
          url: '/platforms/amazon',
          type: 'platform',
          icon: <ShoppingCart className="h-5 w-5" />,
        },
        {
          id: 'ebay',
          title: 'eBay',
          description: 'Seller and buyer accounts for eBay marketplace',
          url: '/platforms/ebay',
          type: 'platform',
          icon: <ShoppingCart className="h-5 w-5" />,
        },
        {
          id: 'amazon-va',
          title: 'Amazon VA Services',
          description: 'Professional virtual assistant services for Amazon sellers',
          url: '/services/va-services',
          type: 'va',
          icon: <UserCheck className="h-5 w-5" />,
          platformName: 'Amazon'
        },
        {
          id: 'reinstatement',
          title: 'Account Reinstatement Services',
          description: 'Get your suspended or blocked account reinstated quickly',
          url: '/services/reinstatement',
          type: 'reinstatement',
          icon: <ShieldCheck className="h-5 w-5" />,
        },
      ].filter(item => 
        item.title.toLowerCase().includes(lowerQuery) || 
        item.description.toLowerCase().includes(lowerQuery) ||
        (item.platformName && item.platformName.toLowerCase().includes(lowerQuery))
      )
      
      setSearchResults(results)
      setIsLoading(false)
    }, 300)
  }

  useEffect(() => {
    performSearch(searchQuery)
  }, [searchQuery])

  const getTypeLabel = (type: string) => {
    switch(type) {
      case 'platform': return 'Platform'
      case 'account': return 'Account'
      case 'service': return 'Service'
      case 'va': return 'VA Service'
      case 'reinstatement': return 'Reinstatement'
      default: return 'Result'
    }
  }

  const getTypeColor = (type: string) => {
    switch(type) {
      case 'platform': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
      case 'account': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      case 'service': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
      case 'va': return 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200'
      case 'reinstatement': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200'
    }
  }

  return (
    <>
      {/* Search Toggle Button */}
      <Button
        variant="outline"
        size="sm"
        className="relative h-9 w-9 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2 rounded-md"
        onClick={() => setIsOpen(true)}
      >
        <Search className="h-4 w-4 xl:mr-2" />
        <span className="hidden xl:inline-flex">Search...</span>
        <span className="sr-only">Search</span>
        <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 text-[10px] font-medium opacity-100 xl:flex">
          <span className="text-xs">Ctrl</span>K
        </kbd>
      </Button>

      {/* Search Dialog */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm"
            />

            {/* Dialog */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="relative w-full max-w-2xl overflow-hidden rounded-lg border bg-background shadow-lg"
            >
              {/* Search Input */}
              <div className="flex items-center border-b px-4">
                <Search className="h-5 w-5 text-muted-foreground mr-2" />
                <input
                  type="text"
                  placeholder="Search platforms, accounts, services..."
                  className="flex-1 py-4 px-2 text-lg bg-transparent focus:outline-none"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  autoFocus
                />
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close</span>
                </Button>
              </div>

              {/* Results Area */}
              <div className="max-h-[60vh] overflow-y-auto">
                {isLoading ? (
                  <div className="p-8 text-center">
                    <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]" />
                    <p className="mt-2 text-sm text-muted-foreground">Searching...</p>
                  </div>
                ) : searchResults.length > 0 ? (
                  <div className="py-2">
                    {searchResults.map((result) => (
                      <Link
                        key={result.id}
                        href={result.url}
                        onClick={() => setIsOpen(false)}
                        className="flex items-start gap-3 px-4 py-3 hover:bg-accent transition-colors"
                      >
                        <div className="flex-shrink-0 mt-1">
                          {result.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <h4 className="text-base font-medium truncate">{result.title}</h4>
                            <span className={`text-xs px-2 py-0.5 rounded-full ${getTypeColor(result.type)}`}>
                              {getTypeLabel(result.type)}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground truncate">{result.description}</p>
                          {result.platformName && (
                            <div className="flex items-center mt-1 text-xs text-muted-foreground">
                              <span>Platform: {result.platformName}</span>
                            </div>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : searchQuery ? (
                  <div className="p-8 text-center">
                    <div className="text-sm text-gray-500 dark:text-gray-400 py-6">
                      No results found for &quot;{searchQuery}&quot;
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">Try searching for platforms, services, or account types</p>
                  </div>
                ) : (
                  <div className="p-8 text-center">
                    <p className="text-muted-foreground">Start typing to search</p>
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      {['Amazon', 'eBay', 'Walmart', 'TikTok', 'Etsy', 'Reinstatement'].map((suggestion) => (
                        <Button 
                          key={suggestion} 
                          variant="outline" 
                          className="text-sm"
                          onClick={() => setSearchQuery(suggestion)}
                        >
                          {suggestion}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="border-t px-4 py-2 flex justify-between items-center text-xs text-muted-foreground">
                <div>Press <kbd className="px-1.5 py-0.5 border rounded bg-muted">Esc</kbd> to close</div>
                <div>
                  <button 
                    className="underline hover:text-foreground"
                    onClick={() => {
                      setSearchQuery('')
                      setSearchResults([])
                    }}
                  >
                    Clear search
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
