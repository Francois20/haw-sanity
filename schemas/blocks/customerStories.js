import {defineField, defineType} from 'sanity'
import {UsersIcon} from '@sanity/icons'

export const customerStories = defineType({
  name: 'customerStories',
  type: 'object',
  title: 'Customer Stories',
  icon: UsersIcon,
  fields: [
    defineField({
      name: 'items',
      title: 'Customer story',
      type: 'array',
      of: [{type: 'customerStory'}],
    }),
  ],
  preview: {
    prepare: () => {
      return {
        title: 'Customer stories',
        media: UsersIcon
      }
    },
  },
})
