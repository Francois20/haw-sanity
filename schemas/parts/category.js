import { defineField, defineType } from 'sanity'

export const category = defineType ({
  name: 'category',
  title: 'Categories',
  type: 'document',
  fields: [
    defineField ({
      name: 'title',
      title: 'Title',
      type: 'localeString',
    }),
  ],
  preview: {
    select: {
      title: 'title.en',
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: title,
      }
    },
  },
})
