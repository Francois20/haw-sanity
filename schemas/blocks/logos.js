import {defineField, defineType} from 'sanity'

export const logos = defineType({
  name: 'logos',
  type: 'object',
  title: 'Logos',
  fields: [
    defineField({
      name: 'text',
      type: 'string',
      title: 'Text',
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'imageAlt'}],
    }),
  ],
})
