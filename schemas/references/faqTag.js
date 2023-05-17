import {defineField, defineType} from 'sanity'

export const faqTag = defineType({
  name: 'faqTag',
  title: 'FAQ Tags',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
