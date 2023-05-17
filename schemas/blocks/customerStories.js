import {defineField, defineType} from 'sanity'

export const customerStories = defineType({
  name: 'customerStories',
  type: 'object',
  title: 'Customer Stories',
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
      return {title: 'Customer stories'}
    },
  },
})
