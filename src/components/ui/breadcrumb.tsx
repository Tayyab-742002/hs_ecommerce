'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbProps {
  homeElement?: React.ReactNode
  separator?: React.ReactNode
  containerClasses?: string
  listClasses?: string
  activeItemClasses?: string
  inactiveItemClasses?: string
}

export function Breadcrumb({
  homeElement = <Home className="h-4 w-4" />,
  separator = <ChevronRight className="h-4 w-4" />,
  containerClasses = "py-4 flex text-sm",
  listClasses = "flex items-center space-x-2",
  activeItemClasses = "text-muted-foreground font-medium",
  inactiveItemClasses = "text-primary hover:text-primary/80 hover:underline transition-colors"
}: BreadcrumbProps) {
  const paths = usePathname()
  const pathNames = paths.split('/').filter(path => path)

  return (
    <nav aria-label="Breadcrumb" className={containerClasses}>
      <ol className={listClasses}>
        <li className="flex items-center">
          <Link href="/" className={inactiveItemClasses}>
            {homeElement}
          </Link>
        </li>
        
        {pathNames.length > 0 && (
          <li className="flex items-center">
            <span className="mx-1 text-gray-400">{separator}</span>
          </li>
        )}

        {pathNames.map((name, index) => {
          const routeTo = `/${pathNames.slice(0, index + 1).join('/')}`
          const isLast = index === pathNames.length - 1
          
          // Format the path name to make it more readable
          const formattedName = name
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
            .replace(/va-services/i, 'VA Services')
          
          return (
            <React.Fragment key={name}>
              <li>
                {isLast ? (
                  <span className={activeItemClasses}>{formattedName}</span>
                ) : (
                  <Link href={routeTo} className={inactiveItemClasses}>
                    {formattedName}
                  </Link>
                )}
              </li>
              
              {!isLast && (
                <li className="flex items-center">
                  <span className="mx-1 text-gray-400">{separator}</span>
                </li>
              )}
            </React.Fragment>
          )
        })}
      </ol>
    </nav>
  )
}
