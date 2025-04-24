'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useColorScheme } from '@/providers/theme-provider'
import { Laptop, Moon,  Sun, X } from 'lucide-react'

export function FloatingThemeToggle() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme, isDark } = useColorScheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="fixed bottom-24 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 mb-2 bg-card rounded-xl shadow-lg border border-border p-4 w-64"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-medium text-sm">Theme Settings</h3>
              <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setIsOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <ThemeButton
                icon={<Sun className="h-5 w-5" />}
                name="Light"
                active={theme === 'light'}
                onClick={() => setTheme('light')}
              />
              <ThemeButton
                icon={<Moon className="h-5 w-5" />}
                name="Dark"
                active={theme === 'dark'}
                onClick={() => setTheme('dark')}
              />
              <ThemeButton
                icon={<Laptop className="h-5 w-5" />}
                name="System"
                active={theme === 'system'}
                onClick={() => setTheme('system')}
              />
            </div>

            <div className="mt-4 pt-3 border-t border-border">
              <p className="text-xs text-muted-foreground">
                Toggle between light, dark, and system preference themes for optimal viewing experience.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="icon"
        variant={isOpen ? "default" : "outline"}
        className="h-12 w-12 rounded-full shadow-lg"
      >
        {isOpen ? (
          <X className="h-5 w-5" />
        ) : (
          isDark ? (
            <Sun className="h-5 w-5 text-yellow-400" />
          ) : (
            <Moon className="h-5 w-5" />
          )
        )}
      </Button>
    </div>
  )
}

function ThemeButton({
  icon,
  name,
  active,
  onClick
}: {
  icon: React.ReactNode;
  name: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <Button
      variant={active ? "default" : "outline"}
      size="sm"
      className={`flex-col h-auto py-3 px-2 gap-1 ${active ? 'ring-2 ring-primary' : ''}`}
      onClick={onClick}
    >
      {icon}
      <span className="text-xs font-normal">{name}</span>
      {active && <div className="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary" />}
    </Button>
  )
}
