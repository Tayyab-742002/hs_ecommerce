import { type SchemaTypeDefinition } from 'sanity'

// Document Types
import platform from './documents/platform'
import account from './documents/account'

import page from './documents/page'
import siteSettings from './documents/siteSettings'

// Object Types
import blockContent from './objects/blockContent'
import seo from './objects/seo'
import accountMetrics from './objects/accountMetrics'
import hero from './objects/hero'
import service from './documents/service'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Document Types
    platform,
    account,
    service,
    page,
    siteSettings,

    // Object Types
    blockContent,
    seo,
    accountMetrics,
    hero,
  ],
}



