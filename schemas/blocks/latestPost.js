import {defineField, defineType} from 'sanity'
import {DocumentTextIcon} from '@sanity/icons'

export const latestPost = defineType({
  name: 'latestPost',
  type: 'object',
  title: 'Latest post',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'description',
      type: 'string',
      readOnly: true,
      initialValue: 'The latest post will be displayed automatically',
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
      return {
        title: 'Latest blog post',
        media: DocumentTextIcon,
      }
    },
  },
})
