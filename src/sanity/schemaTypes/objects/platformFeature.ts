import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'platformFeature',
  title: 'Platform Feature',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Feature Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Feature Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'icon',
      title: 'Feature Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
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
      media: 'icon',
    },
  },
})