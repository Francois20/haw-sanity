import {defineField, defineType} from 'sanity'

export const error = defineType({
  name: 'error',
  type: 'document',
  title: 'Error 404',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Heading',
    }),
    defineField({
      name: 'text',
      type: 'text',
      title: 'Text',
      rows: 4,
    }),
    defineField({
      name: 'buttonText',
      type: 'string',
      title: 'Button text',
    }),
    defineField({
      name: 'image',
      type: 'imageAlt',
      title: 'Image',
    }),
  ],
})
