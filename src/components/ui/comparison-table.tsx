'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, X, HelpCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface Feature {
  name: string
  description?: string
}

interface ComparisonPlan {
  name: string
  description?: string
  price: string
  priceUnit?: string
  features: Record<string, boolean | string>
  popular?: boolean
  actionText?: string
  actionLink?: string
}

interface ComparisonTableProps {
  title?: string
  description?: string
  features: Feature[]
  plans: ComparisonPlan[]
  className?: string
}

export function ComparisonTable({
  title,
  description,
  features,
  plans,
  className = ''
}: ComparisonTableProps) {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null)

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className={`w-full overflow-x-auto ${className}`}
    >
      {(title || description) && (
        <div className="mb-8 text-center">
          {title && <h3 className="text-2xl font-bold mb-3">{title}</h3>}
          {description && <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{description}</p>}
        </div>
      )}

      <div className="min-w-max">
        <div className="grid grid-cols-[250px_repeat(auto-fit,minmax(180px,1fr))]">
          {/* Header row */}
          <div className="border-b p-6 bg-gray-50 dark:bg-gray-800">
            <span className="font-semibold">Features</span>
          </div>
          
          {plans.map((plan, i) => (
            <div 
              key={i}
              className={`border-b p-6 text-center relative ${
                plan.popular 
                  ? 'bg-primary/5 dark:bg-primary/10 border-x border-primary/20' 
                  : 'bg-gray-50 dark:bg-gray-800'
              }`}
            >
              {plan.popular && (
                <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold">{plan.name}</h3>
              {plan.description && (
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{plan.description}</p>
              )}
              <div className="mt-3">
                <span className="text-3xl font-bold">{plan.price}</span>
                {plan.priceUnit && (
                  <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">{plan.priceUnit}</span>
                )}
              </div>
            </div>
          ))}

          {/* Feature rows */}
          {features.map((feature, i) => (
            <React.Fragment key={i}>
              <div 
                className={`border-b p-4 flex items-center hover:bg-gray-50 dark:hover:bg-gray-800/60 ${
                  hoveredFeature === feature.name ? 'bg-gray-50 dark:bg-gray-800/60' : ''
                }`}
                onMouseEnter={() => setHoveredFeature(feature.name)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div className="flex items-center gap-2">
                  <span>{feature.name}</span>
                  {feature.description && (
                    <div className="group relative">
                      <HelpCircle className="h-4 w-4 text-gray-400" />
                      <div className="absolute left-0 bottom-full mb-2 w-60 p-2 bg-white dark:bg-gray-800 rounded shadow-lg border text-sm text-gray-600 dark:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
                        {feature.description}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {plans.map((plan, j) => {
                const value = plan.features[feature.name]
                return (
                  <div
                    key={`${i}-${j}`}
                    className={`border-b p-4 text-center ${
                      plan.popular ? 'border-x border-primary/20' : ''
                    } ${
                      hoveredFeature === feature.name ? 'bg-gray-50 dark:bg-gray-800/60' : ''
                    }`}
                  >
                    {typeof value === 'boolean' ? (
                      value ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-red-500 mx-auto" />
                      )
                    ) : (
                      <span>{value}</span>
                    )}
                  </div>
                )
              })}
            </React.Fragment>
          ))}

          {/* Action row */}
          <div className="p-6" />
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`p-6 text-center ${
                plan.popular ? 'border-x border-primary/20' : ''
              }`}
            >
              <Button 
                asChild 
                className={`w-full ${
                  plan.popular ? 'bg-primary hover:bg-primary/90' : 'bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600'
                }`}
              >
                <Link href={plan.actionLink || '/contact'}>
                  {plan.actionText || 'Get Started'}
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
