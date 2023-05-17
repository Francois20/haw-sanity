import {defineField, defineType} from 'sanity'

export const twoLatestPosts = defineType({
  name: 'twoLatestPosts',
  type: 'object',
  title: '2 Latest posts',
  fields: [
    defineField({
      name: 'description',
      type: 'string',
      readOnly: true,
      initialValue: 'The 2 latest posts will be displayed automatically',
    }),
    defineField({
      name: 'linkText',
      type: 'string',
      title: 'Link text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'labelText',
      type: 'string',
      title: 'Label text',
    }),
    defineField({
      name: 'parentPage',
      type: 'reference',
      to: [{type: 'page'}],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare: () => {
      return {title: '2 Latest blog posts'}
    },
  },
})
