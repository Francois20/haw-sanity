import { defineField, defineType } from "sanity";

export const target = defineType({
  title: 'Target',
  name: 'target',
  type: 'object',
  fields: [
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
    })
  ]
});