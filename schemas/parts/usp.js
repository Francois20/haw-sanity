import {defineField, defineType} from 'sanity'

export const usp = defineType({
  name: 'usp',
  type: 'object',
  title: 'Usp',
  fields: [
    defineField({
      name: 'image',
      type: 'imageAlt',
      title: 'Image',
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'text',
      type: 'text',
      title: 'Text',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
