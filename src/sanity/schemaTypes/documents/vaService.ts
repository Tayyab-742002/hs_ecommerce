import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'vaService',
  title: 'VA Services',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Service Name',
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
      name: 'platform',
      title: 'Platform',
      type: 'reference',
      to: [{ type: 'platform' }],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Service Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Full Description',
      type: 'blockContent',
    }),
    defineField({
      name: 'features',
      title: 'Service Features',
      type: 'array',
      of: [{ type: 'serviceFeature' }],
    }),
    defineField({
      name: 'isReinstatement',
      title: 'Is Reinstatement Service',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'price',
      title: 'Starting Price',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      hidden: true,
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      platform: 'platform.name',
    },
    prepare(selection) {
      const { title, platform } = selection
      return {
        title: title,
        subtitle: platform,
      }
    },
  },
})
