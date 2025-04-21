import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'accountMetrics',
  title: 'Account Metrics',
  type: 'object',
  fields: [
    defineField({
      name: 'followers',
      title: 'Followers Count',
      type: 'number',
      validation: Rule => Rule.min(0),
    }),
    defineField({
      name: 'following',
      title: 'Following Count',
      type: 'number',
      validation: Rule => Rule.min(0),
    }),
    defineField({
      name: 'posts',
      title: 'Posts Count',
      type: 'number',
      validation: Rule => Rule.min(0),
    }),
    defineField({
      name: 'engagement',
      title: 'Engagement Rate',
      type: 'number',
      validation: Rule => Rule.min(0).max(100),
    }),
    defineField({
      name: 'accountAge',
      title: 'Account Age (months)',
      type: 'number',
      validation: Rule => Rule.min(0),
    }),
  ],
})