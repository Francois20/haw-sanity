import {defineField, defineType} from 'sanity'

export const contentExtended = defineType({
  name: 'contentExtended',
  type: 'object',
  title: 'Content Extended',
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
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        },
      ],
    }),
    defineField({
      name: 'paragraphs',
      title: 'Paragraphs',
      type: 'array',
      of: [{type: 'paragraph'}],
    }),
  ],
  preview: {
    prepare: () => {
      return {title: 'Content Extended'}
    },
  },
})
