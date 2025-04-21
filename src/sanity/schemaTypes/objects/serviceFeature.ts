import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'serviceFeature',
  title: 'Service Feature',
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
      name: 'included',
      title: 'Included in Service',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'highlight',
      title: 'Highlight Feature',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      included: 'included',
    },
    prepare(selection) {
      const { title, included } = selection
      return {
        title: title,
        subtitle: included ? '✓ Included' : '✗ Not included',
      }
    },
  },
})