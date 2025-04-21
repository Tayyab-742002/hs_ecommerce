'use client'

import { motion } from 'framer-motion'

interface LoadingProps {
  size?: 'small' | 'medium' | 'large'
  color?: string
  text?: string
  fullPage?: boolean
}

export function Loading({
  size = 'medium',
  color = 'primary',
  text = 'Loading...',
  fullPage = false
}: LoadingProps) {
  const sizeMap = {
    small: 'w-6 h-6',
    medium: 'w-10 h-10',
    large: 'w-16 h-16'
  }

  const colorMap = {
    primary: 'border-primary',
    white: 'border-white',
    gray: 'border-gray-300 dark:border-gray-700'
  }

  const textSizeMap = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg'
  }

  const borderColor = colorMap[color as keyof typeof colorMap] || colorMap.primary

  const container = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  const spinner = (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className={`${sizeMap[size]} rounded-full border-4 border-t-transparent ${borderColor} animate-spin`} />
      {text && (
        <motion.p 
          className={`${textSizeMap[size]} text-gray-600 dark:text-gray-300`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {text}
        </motion.p>
      )}
    </div>
  )
  
  if (fullPage) {
    return (
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible" 
        className="fixed inset-0 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50"
      >
        <motion.div variants={item}>
          {spinner}
        </motion.div>
      </motion.div>
    )
  }
  
  return spinner
}
