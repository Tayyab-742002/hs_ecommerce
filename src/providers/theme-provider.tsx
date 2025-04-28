'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes'

type ThemeProviderProps = {
  children: React.ReactNode
}

// Extended theme context that provides custom color scheme helpers
type ColorSchemeContextType = {
  // Platform color handling
  getPlatformColor: (platformName: string) => string
  getPlatformGradient: (platformName: string) => string
}

// Create context with default values
const ColorSchemeContext = createContext<ColorSchemeContextType>({
  getPlatformColor: () => 'var(--color-primary)',
  getPlatformGradient: () => 'linear-gradient(135deg, var(--color-primary), var(--color-primary-light))',
})

// Custom hook to use our color scheme context
export const useColorScheme = () => useContext(ColorSchemeContext)

// The actual provider component that wraps the app
export function ThemeProvider({ 
  children
}: ThemeProviderProps) {
  // For server-side rendering
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Force dark theme
    document.documentElement.classList.add('dark')
  }, [])

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      forcedTheme="dark"
      storageKey="hs-ecommerce-theme"
    >
      <ColorSchemeProvider>
        {mounted && children}
      </ColorSchemeProvider>
    </NextThemesProvider>
  )
}

// The inner provider that adds our custom context
function ColorSchemeProvider({ children }: { children: React.ReactNode }) {
  // Helper to get platform-specific color
  const getPlatformColor = (platformName: string): string => {
    const lowerName = platformName.toLowerCase()
    
    if (!['amazon', 'ebay', 'walmart', 'tiktok', 'etsy'].includes(lowerName)) {
      return 'var(--color-primary)'
    }
    
    return `var(--color-${lowerName})`
  }
  
  // Helper to get platform-specific gradient
  const getPlatformGradient = (platformName: string): string => {
    const color = getPlatformColor(platformName)
    return `linear-gradient(135deg, ${color}, ${color}aa)`
  }
  
  // Create the context value
  const contextValue: ColorSchemeContextType = {
    getPlatformColor,
    getPlatformGradient
  }
  
  return (
    <ColorSchemeContext.Provider value={contextValue}>
      {children}
    </ColorSchemeContext.Provider>
  )
}
