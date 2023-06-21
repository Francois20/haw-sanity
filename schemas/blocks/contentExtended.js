import {defineField, defineType} from 'sanity'
import {SplitHorizontalIcon} from '@sanity/icons'

export const contentExtended = defineType({
  name: 'contentExtended',
  type: 'object',
  title: 'Content Extended',
  icon: SplitHorizontalIcon,
  fields: [
    defineField({
      name: 'reversed',
      type: 'boolean',
      title: 'Reversed',
      initialValue: false,
    }),
    defineField({
      name: 'tag',
      type: 'string',
      title: 'Tag',
    }),
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
      name: 'image',
      type: 'imageAlt',
      title: 'Image',
      validation: (Rule) => Rule.required(),
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
      return {
        title: 'Content Extended',
        media: SplitHorizontalIcon,
      }
    },
  },
})
