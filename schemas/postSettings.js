import {defineField, defineType} from 'sanity'

export const postSettings = defineType({
  name: 'postSettings',
  title: 'Post Settings',
  type: 'object',
  fields: [
    defineField({
      name: 'returnText',
      title: 'Return text',
      type: 'string',
    }),
    defineField({
      name: 'estimatedReadTimeText',
      title: 'Estimated read time text',
      type: 'string',
    }),
    defineField({
      name: 'shareText',
      title: 'Share text',
      type: 'string',
    }),
  ],
})
