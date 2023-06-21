import {defineField, defineType} from 'sanity'
import {UsersIcon} from '@sanity/icons'

export const organizationSizes = defineType({
  name: 'organizationSizes',
  title: 'Organization sizes',
  icon: UsersIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Size',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare: (selection) => {
      const {title} = selection
      return {
        title: title,
        media: UsersIcon,
      }
    },
  },
})
