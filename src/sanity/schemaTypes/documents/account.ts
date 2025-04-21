import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'account',
  title: 'Accounts',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'platform',
      title: 'Platform',
      type: 'reference',
      to: [{ type: 'platform' }],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'New', value: 'new' },
          { title: 'Aged', value: 'aged' },
          { title: 'Professional', value: 'professional' },
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Account Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: 'metrics',
      title: 'Account Metrics',
      type: 'accountMetrics',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'isAvailable',
      title: 'Available',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      platform: 'platform.name',
      country: 'country',
    },
    prepare(selection) {
      const { title, platform, country } = selection
      return {
        title: title,
        subtitle: `${platform} | ${country}`,
      }
    },
  },
})