'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

interface FormField {
  label: string
  fieldType: 'text' | 'select' | 'checkbox' | 'textarea'
  options?: string[]
  required: boolean
}

interface RequirementsFormProps {
  platformName: string
  fields: FormField[]
}

export function RequirementsForm({ platformName, fields }: RequirementsFormProps) {
  const [formData, setFormData] = useState<Record<string, any>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    setFormData(prev => ({ ...prev, [name]: newValue }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      // Here you would integrate with your backend API or email service
      // For now, we'll just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      setIsSubmitted(true)
      setFormData({})
    } catch (err) {
      setError('An error occurred while submitting your requirements. Please try again.')
      console.error('Form submission error:', err)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <h3 className="text-xl font-semibold text-green-700 mb-2">Requirements Submitted!</h3>
        <p className="text-green-600 mb-4">
          We've received your {platformName} account requirements. Our team will review and get back to you shortly.
        </p>
        <Button 
          variant="outline" 
          onClick={() => setIsSubmitted(false)}
          className="text-green-700 border-green-300 hover:bg-green-100"
        >
          Submit Another Request
        </Button>
      </div>
    )
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-4">
        Submit Your {platformName} Account Requirements
      </h3>
      
      {error && (
        <div className="bg-red-50 text-red-700 p-3 rounded-md mb-4">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Standard contact fields */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
            Your Name *
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            value={formData.fullName || ''}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email || ''}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number (WhatsApp preferred) *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={formData.phone || ''}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        
        {/* Dynamic fields based on platform requirements */}
        {fields.map((field, index) => {
          const fieldId = field.label.toLowerCase().replace(/\s+/g, '-')
          
          switch (field.fieldType) {
            case 'text':
              return (
                <div key={index}>
                  <label htmlFor={fieldId} className="block text-sm font-medium text-gray-700 mb-1">
                    {field.label} {field.required && '*'}
                  </label>
                  <input
                    id={fieldId}
                    name={fieldId}
                    type="text"
                    required={field.required}
                    value={formData[fieldId] || ''}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              )
              
            case 'select':
              return (
                <div key={index}>
                  <label htmlFor={fieldId} className="block text-sm font-medium text-gray-700 mb-1">
                    {field.label} {field.required && '*'}
                  </label>
                  <select
                    id={fieldId}
                    name={fieldId}
                    required={field.required}
                    value={formData[fieldId] || ''}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">-- Select an option --</option>
                    {field.options?.map((option, optIndex) => (
                      <option key={optIndex} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              )
              
            case 'checkbox':
              return (
                <div key={index} className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id={fieldId}
                      name={fieldId}
                      type="checkbox"
                      checked={formData[fieldId] || false}
                      onChange={handleChange}
                      className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor={fieldId} className="font-medium text-gray-700">
                      {field.label}
                    </label>
                  </div>
                </div>
              )
              
            case 'textarea':
              return (
                <div key={index}>
                  <label htmlFor={fieldId} className="block text-sm font-medium text-gray-700 mb-1">
                    {field.label} {field.required && '*'}
                  </label>
                  <textarea
                    id={fieldId}
                    name={fieldId}
                    rows={4}
                    required={field.required}
                    value={formData[fieldId] || ''}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              )
              
            default:
              return null
          }
        })}
        
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full py-3"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Requirements'}
        </Button>
        
        <p className="text-xs text-gray-500 mt-2">
          We'll contact you shortly to discuss your requirements and provide a quote.
        </p>
      </form>
    </div>
  )
}
