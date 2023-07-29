import {defineField, defineType} from 'sanity'

export const postSettings = defineType({
  name: 'postSettings',
  title: 'Post Settings',
  type: 'object',
  fields: [
    defineField({
      name: 'parentPage',
      title: 'Parent page',
      type: 'reference',
      to: [{type: 'page'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'returnText',
      title: 'Return text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'estimatedReadTimeText',
      title: 'Estimated read time text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shareText',
      title: 'Share text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
