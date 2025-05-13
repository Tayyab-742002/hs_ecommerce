import { defineField, defineType } from "sanity";

export default defineType({
  name: "account",
  title: "Accounts",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Account Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: (doc) => `${doc.category}`,
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "platform",
      title: "Platform",
      type: "reference",
      to: [{ type: "platform" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Account Category",
      type: "string",
      options: {
        list: [
          { title: "Aged", value: "aged" },
          { title: "Professional", value: "professional" },
          { title: "Business", value: "business" },
          { title: "Verified", value: "verified" },
          { title: "Standard", value: "standard" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "metrics",
      title: "Account Metrics",
      type: "object",
      fields: [
        {
          name: "followers",
          title: "Followers Count",
          type: "number",
        },
        {
          name: "engagement",
          title: "Engagement Rate",
          type: "number",
        },
        {
          name: "posts",
          title: "Posts Count",
          type: "number",
        },
        {
          name: "age",
          title: "Account Age (months)",
          type: "number",
        },
      ],
    }),
    defineField({
      name: "status",
      title: "Account Status",
      type: "string",
      options: {
        list: [
          { title: "Available", value: "available" },
          { title: "Sold", value: "sold" },
          { title: "Pending", value: "pending" },
        ],
      },
      initialValue: "available",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "platform.name",
      media: "platform.logo",
      price: "price",
    },
    prepare(selection) {
      const { title, subtitle, media, price } = selection;
      return {
        title: title || "Untitled Account",
        subtitle: subtitle ? `${subtitle} - $${price}` : "",
        media,
      };
    },
  },
});
