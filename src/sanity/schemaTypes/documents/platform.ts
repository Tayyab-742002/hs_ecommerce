import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'platform',
  title: 'Platforms',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Platform Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Platform Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'banner',
      title: 'Platform Banner',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    }),
    defineField({
      name: 'features',
      title: 'Platform Features',
      type: 'array',
      of: [{ type: 'platformFeature' }],
    }),
    defineField({
      name: 'accountCategories',
      title: 'Account Categories',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'New', value: 'new' },
          { title: 'Aged', value: 'aged' },
          { title: 'Professional', value: 'professional' },
        ],
      },
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      hidden: true,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'logo',
    },
  },
})