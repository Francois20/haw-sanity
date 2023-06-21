import {defineField, defineType} from 'sanity'
import {CommentIcon} from '@sanity/icons'

export const quote = defineType({
  name: 'quote',
  type: 'object',
  title: 'Quote',
  icon: CommentIcon,
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
      return {
        title: 'Quote',
        media: CommentIcon
      }
    },
  },
})
