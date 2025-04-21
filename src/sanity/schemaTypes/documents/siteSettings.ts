import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Site Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
    }),
    defineField({
      name: 'contact',
      title: 'Contact Information',
      type: 'object',
      fields: [
        {
          name: 'email',
          title: 'Email Address',
          type: 'string',
          validation: Rule => Rule.email(),
        },
        {
          name: 'phone',
          title: 'Phone Number',
          type: 'string',
        },
        {
          name: 'address',
          title: 'Address',
          type: 'object',
          fields: [
            { name: 'street', title: 'Street', type: 'string' },
            { name: 'city', title: 'City', type: 'string' },
            { name: 'state', title: 'State', type: 'string' },
            { name: 'zip', title: 'ZIP Code', type: 'string' },
            { name: 'country', title: 'Country', type: 'string' },
          ],
        },
        {
          name: 'businessHours',
          title: 'Business Hours',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'days', title: 'Days', type: 'string' },
                { name: 'hours', title: 'Hours', type: 'string' },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        { name: 'facebook', title: 'Facebook URL', type: 'url' },
        { name: 'twitter', title: 'Twitter URL', type: 'url' },
        { name: 'instagram', title: 'Instagram URL', type: 'url' },
        { name: 'linkedin', title: 'LinkedIn URL', type: 'url' },
      ],
    }),
    defineField({
      name: 'defaultSeo',
      title: 'Default SEO Settings',
      type: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'siteName',
    },
    prepare(selection) {
      const { title } = selection
      return {
        title: title,
        subtitle: 'Site Settings',
      }
    },
  },
})
