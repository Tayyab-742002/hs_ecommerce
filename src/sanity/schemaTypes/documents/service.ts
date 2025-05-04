import { defineField, defineType } from "sanity";

export default defineType({
  name: "service",
  title: "Services",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Service Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    // defineField({
    //   name: 'platform',
    //   title: 'Platform',
    //   type: 'reference',
    //   to: [{ type: 'platform' }],
    //   validation: Rule => Rule.required(),
    // }),
    defineField({
      name: "icon",
      title: "Service Icon",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "price",
      title: "Starting Price",
      type: "number",
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "blockContent",
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string", title: "Title" },
            { name: "description", type: "text", title: "Description" },
            { name: "included", type: "boolean", title: "Included" },
          ],
        },
      ],
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
    }),
  ],
});
