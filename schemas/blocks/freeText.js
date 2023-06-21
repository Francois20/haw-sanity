import {defineField, defineType} from 'sanity'
import {BlockContentIcon} from '@sanity/icons'

export const freeText = defineType({
  name: 'freeText',
  type: 'object',
  title: 'Free Text',
  icon: BlockContentIcon,
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
      return {
        title: 'Free Text',
        media: BlockContentIcon,
      }
    },
  },
})
