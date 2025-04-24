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
      name: 'color',
      title: 'Platform Color',
      type: 'string',
      description: 'CSS variable for the platform color (e.g., var(--color-amazon))',
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
      title: 'Key Features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Title' },
            { name: 'description', type: 'text', title: 'Description' },
            {
              name: 'icon',
              type: 'image',
              title: 'Icon',
              options: { hotspot: true },
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'accountCategories',
      title: 'Account Categories',
      description: 'Types of accounts available for this platform (seller, buyer, etc.)',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Seller', value: 'seller' },
          { title: 'Buyer', value: 'buyer' },
          { title: 'Business', value: 'business' },
          { title: 'Professional', value: 'professional' },
          { title: 'Verified', value: 'verified' },
        ],
      },
    }),
    defineField({
      name: 'vaServices',
      title: 'Virtual Assistant Services',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Service Title' },
            { name: 'description', type: 'text', title: 'Service Description' },
            { name: 'price', type: 'string', title: 'Price' },
            {
              name: 'icon',
              type: 'image',
              title: 'Service Icon',
              options: { hotspot: true },
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'accountRequirementFields',
      title: 'Account Requirement Form Fields',
      description: 'Custom fields for the account requirements form',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'string', title: 'Field Label' },
            { name: 'fieldType', type: 'string', title: 'Field Type', 
              options: {
                list: [
                  { title: 'Text', value: 'text' },
                  { title: 'Select', value: 'select' },
                  { title: 'Checkbox', value: 'checkbox' },
                  { title: 'Textarea', value: 'textarea' },
                ],
              } 
            },
            { 
              name: 'options', 
              type: 'array', 
              title: 'Options (for Select fields)',
              of: [{ type: 'string' }],
              hidden: ({ parent }) => parent?.fieldType !== 'select',
            },
            { name: 'required', type: 'boolean', title: 'Required Field' },
          ],
        },
      ],
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
      title: 'name',
      media: 'logo',
    },
  },
})
