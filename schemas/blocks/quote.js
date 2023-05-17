import {defineField, defineType} from 'sanity'

export const quote = defineType({
  name: 'quote',
  type: 'object',
  title: 'Quote',
  fields: [
    defineField({
      name: 'text',
      type: 'text',
      title: 'Text',
    }),
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
    }),
    defineField({
      name: 'company',
      type: 'string',
      title: 'Company',
    }),
  ],
  preview: {
    prepare: () => {
      return {title: 'Quote'}
    },
  },
})
