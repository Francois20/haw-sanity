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
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'company',
      type: 'string',
      title: 'Company',
    }),
    defineField({
      name: 'image',
      type: 'imageAlt',
      title: 'Image',
    }),
  ],
  preview: {
    prepare: () => {
      return {
        title: 'Quote',
        media: CommentIcon,
      }
    },
  },
})
