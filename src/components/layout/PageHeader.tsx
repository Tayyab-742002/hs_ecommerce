'use client'

import { motion } from 'framer-motion'
import { Breadcrumb } from '@/components/ui/breadcrumb'

interface PageHeaderProps {
  title: string
  description?: string
  children?: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg'
  centered?: boolean
  showBreadcrumbs?: boolean
}

export function PageHeader({
  title,
  description,
  children,
  className = '',
  size = 'md',
  centered = false,
  showBreadcrumbs = true
}: PageHeaderProps) {
  const sizeClasses = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16'
  }

  const titleSizes = {
    sm: 'text-2xl md:text-3xl',
    md: 'text-3xl md:text-4xl',
    lg: 'text-4xl md:text-5xl'
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <div className={`w-full bg-background ${sizeClasses[size]} ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {showBreadcrumbs && <Breadcrumb />}
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={`${centered ? 'text-center' : ''} mt-4`}
        >
          <motion.h1
            variants={itemVariants}
            className={`font-bold ${titleSizes[size]} text-gray-900 dark:text-white`}
          >
            {title}
          </motion.h1>
          
          {description && (
            <motion.p
              variants={itemVariants}
              className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl"
            >
              {description}
            </motion.p>
          )}
          
          {children && (
            <motion.div
              variants={itemVariants}
              className="mt-6"
            >
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
