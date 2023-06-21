import {defineField, defineType} from 'sanity'
import {DocumentIcon} from '@sanity/icons'

export const posts = defineType({
  name: 'posts',
  type: 'object',
  title: 'Posts',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'postLink',
      type: 'string',
      title: 'Post link text',
    }),
    defineField({
      name: 'returnLink',
      type: 'string',
      title: 'Return link text',
    }),
    defineField({
      name: 'readTime',
      type: 'string',
      title: 'Read time text',
    }),
  ],
  preview: {
    prepare: () => {
      return {
        title: 'Posts',
        media: DocumentIcon,
      }
    },
  },
})
