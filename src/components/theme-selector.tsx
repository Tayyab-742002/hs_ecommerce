'use client'

import { useColorScheme } from '@/providers/theme-provider'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Moon, Sun, Laptop, ChevronDown } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ThemeSelector() {
  const { theme, setTheme } = useColorScheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch by waiting for mount
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="h-9 w-[130px]" />
  }

  const themes = [
    {
      id: 'light',
      name: 'Light',
      icon: <Sun className="h-4 w-4 mr-2" />,
    },
    {
      id: 'dark',
      name: 'Dark',
      icon: <Moon className="h-4 w-4 mr-2" />,
    },
    {
      id: 'system',
      name: 'System',
      icon: <Laptop className="h-4 w-4 mr-2" />,
    },
  ]

  const currentTheme = themes.find((t) => t.id === theme) || themes[2] // Default to system

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="h-9 gap-1 px-3"
        >
          {currentTheme.icon}
          <span>{currentTheme.name}</span>
          <ChevronDown className="h-3 w-3 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map((item) => (
          <DropdownMenuItem
            key={item.id}
            onClick={() => setTheme(item.id)}
            className="flex items-center gap-2 min-w-[130px] cursor-pointer"
          >
            {item.icon}
            <span>{item.name}</span>
            {item.id === theme && (
              <span className="ml-auto h-2 w-2 rounded-full bg-primary" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
