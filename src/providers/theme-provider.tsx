'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes'

type ThemeProviderProps = {
  children: React.ReactNode
  attribute?: string
  defaultTheme?: string
  enableSystem?: boolean
  storageKey?: string
  forcedTheme?: string
}

// Extended theme context that provides custom color scheme helpers
type ColorSchemeContextType = {
  // Theme handling
  theme: string | undefined
  setTheme: (theme: string) => void
  systemTheme: string | undefined
  
  // Platform color handling
  getPlatformColor: (platformName: string) => string
  getPlatformGradient: (platformName: string) => string
  
  // Helper methods
  isDark: boolean
  isLight: boolean
}

// Create context with default values
const ColorSchemeContext = createContext<ColorSchemeContextType>({
  theme: undefined,
  setTheme: () => {},
  systemTheme: undefined,
  getPlatformColor: () => 'var(--color-primary)',
  getPlatformGradient: () => 'linear-gradient(135deg, var(--color-primary), var(--color-primary-light))',
  isDark: false,
  isLight: true
})

// Custom hook to use our color scheme context
export const useColorScheme = () => useContext(ColorSchemeContext)

// The actual provider component that wraps the app
export function ThemeProvider({ 
  children, 
  attribute = 'class',
  defaultTheme = 'system',
  enableSystem = true,
  storageKey = 'hs-ecommerce-theme',
  ...props 
}: ThemeProviderProps) {
  // For server-side rendering
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <NextThemesProvider
      attribute={attribute}
      defaultTheme={defaultTheme}
      enableSystem={enableSystem}
      storageKey={storageKey}
      {...props}
    >
      <ColorSchemeProvider>
        {mounted && children}
      </ColorSchemeProvider>
    </NextThemesProvider>
  )
}

// The inner provider that adds our custom context
function ColorSchemeProvider({ children }: { children: React.ReactNode }) {
  const { theme, setTheme, systemTheme } = useTheme()
  
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
  
  // Determine if we're in dark or light mode
  const isDark = theme === 'dark' || (theme === 'system' && systemTheme === 'dark')
  const isLight = !isDark
  
  // Create the context value
  const contextValue: ColorSchemeContextType = {
    theme,
    setTheme,
    systemTheme,
    getPlatformColor,
    getPlatformGradient,
    isDark,
    isLight
  }
  
  return (
    <ColorSchemeContext.Provider value={contextValue}>
      {children}
    </ColorSchemeContext.Provider>
  )
}
