import {defineField, defineType} from 'sanity'
import {IceCreamIcon} from '@sanity/icons'

export const usps = defineType({
  name: 'usps',
  type: 'object',
  title: 'Unique selling points',
  icon: IceCreamIcon,
  fields: [
    defineField({
      name: 'items',
      title: 'Item',
      type: 'array',
      of: [{type: 'usp'}],
    }),
  ],
  preview: {
    prepare: () => {
      return {
        title: 'Unique selling points',
        media: IceCreamIcon
      }
    },
  },
})
