'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Plus, Minus } from 'lucide-react'

interface Feature {
  title: string
  description: string
  icon?: React.ReactNode
}

interface FeatureListProps {
  title?: string
  description?: string
  features: Feature[]
  expandable?: boolean
  animated?: boolean
  columns?: 1 | 2 | 3
  className?: string
}

export function FeatureList({
  title,
  description,
  features,
  expandable = false,
  animated = true,
  columns = 1,
  className = ''
}: FeatureListProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(expandable ? null : -1)

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  const handleToggle = (index: number) => {
    if (!expandable) return
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  const columnsClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
  }

  return (
    <div className={`w-full ${className}`}>
      {(title || description) && (
        <div className="mb-8">
          {title && <h3 className="text-2xl font-bold mb-3">{title}</h3>}
          {description && <p className="text-gray-600 dark:text-gray-300">{description}</p>}
        </div>
      )}

      <motion.div
        variants={animated ? container : undefined}
        initial={animated ? "hidden" : undefined}
        animate={animated ? "visible" : undefined}
        className={`grid ${columnsClass[columns]} gap-6`}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={animated ? item : undefined}
            className={`bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700 overflow-hidden ${
              expandable ? 'cursor-pointer' : ''
            }`}
            onClick={() => handleToggle(index)}
          >
            <div className="p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  {feature.icon || (
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                    {expandable && (
                      <button className="text-gray-500 h-6 w-6 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700">
                        {expandedIndex === index ? (
                          <Minus className="h-4 w-4" />
                        ) : (
                          <Plus className="h-4 w-4" />
                        )}
                      </button>
                    )}
                  </div>
                  
                  {(!expandable || expandedIndex === index) && (
                    <div 
                      className={`text-gray-600 dark:text-gray-300 ${expandable ? 'mt-2' : ''}`}
                    >
                      {feature.description}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
