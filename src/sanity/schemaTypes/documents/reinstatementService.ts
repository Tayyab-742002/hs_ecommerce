import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'reinstatementService',
  title: 'Account Reinstatement Services',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Service Title',
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
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    }),
    defineField({
      name: 'image',
      title: 'Service Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'features',
      title: 'Service Features',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'successRate',
      title: 'Success Rate',
      type: 'string',
    }),
    defineField({
      name: 'turnaroundTime',
      title: 'Turnaround Time',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Starting Price',
      type: 'string',
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      hidden: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'platform.name',
      media: 'image',
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: `Platform: ${subtitle || 'Unknown'}`,
        media,
      }
    },
  },
})
