import { type SchemaTypeDefinition } from 'sanity'

// Document Types
import platform from './documents/platform'
import account from './documents/account'
import testimonial from './documents/testimonial'
import page from './documents/page'
import siteSettings from './documents/siteSettings'

// Object Types
import blockContent from './objects/blockContent'
import seo from './objects/seo'
import contactInfo from './objects/contactInfo'
import accountMetrics from './objects/accountMetrics'
import platformFeature from './objects/platformFeature'
import serviceFeature from './objects/serviceFeature'
import hero from './objects/hero'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Document Types
    platform,
    account,
    testimonial,
    page,
    siteSettings,

    // Object Types
    blockContent,
    seo,
    contactInfo,
    accountMetrics,
    platformFeature,
    serviceFeature,
    hero,
  ],
}


