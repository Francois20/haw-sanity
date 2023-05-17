import {defineField, defineType} from 'sanity'

export const usps = defineType({
  name: 'usps',
  type: 'object',
  title: 'Unique selling points',
  fields: [
    defineField({
      name: 'items',
      title: 'Item',
      type: 'array',
      of: [{type: 'usp'}],
    }),
  ],
  preview: {
    prepare: () => {
      return {title: 'Unique selling points'}
    },
  },
})
