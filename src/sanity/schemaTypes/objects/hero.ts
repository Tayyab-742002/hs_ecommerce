import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'cta',
      title: 'Call to Action',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Button Text',
          type: 'string',
        },
        {
          name: 'link',
          title: 'Button Link',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'overlay',
      title: 'Background Overlay',
      type: 'object',
      fields: [
        {
          name: 'enabled',
          title: 'Enable Overlay',
          type: 'boolean',
          initialValue: true,
        },
        {
          name: 'opacity',
          title: 'Overlay Opacity',
          type: 'number',
          validation: Rule => Rule.min(0).max(1),
          initialValue: 0.5,
        },
      ],
    }),
  ],
})
