import {defineField, defineType} from 'sanity'

export const paragraph = defineType({
  name: 'paragraph',
  type: 'object',
  title: 'Paragraph',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'text',
      type: 'portableText',
      title: 'Text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'link',
      type: 'link',
      title: 'Link',
    }),
  ],
})
