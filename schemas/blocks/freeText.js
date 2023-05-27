import {defineField, defineType} from 'sanity'

export const freeText = defineType({
  name: 'freeText',
  type: 'object',
  title: 'Free Text',
  fields: [
    defineField({
      name: 'text',
      type: 'portableText',
      title: 'Text',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare: () => {
      return {title: 'Free Text'}
    },
  },
})
