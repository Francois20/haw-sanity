import {defineField, defineType} from 'sanity'

export const footer = defineType({
  name: 'footer',
  type: 'object',
  title: 'Footer',
  fields: [
    defineField({
      name: 'linkText',
      type: 'string',
      title: 'Link Text',
    }),
    defineField({
      name: 'url',
      type: 'url',
      title: 'URL',
    }),
  ],
})
