import {defineField, defineType} from 'sanity'

export const link = defineType({
  name: 'link',
  type: 'object',
  title: 'Link',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'type',
      type: 'string',
      title: 'Type',
      options: {
        list: [
          {title: 'Internal', value: 'internal'},
          {title: 'External', value: 'external'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'externalLink',
      type: 'url',
      title: 'URL',
      hidden: ({parent, value}) => parent?.type && parent?.type === 'internal',
    }),
    defineField({
      name: 'internalLink',
      type: 'reference',
      to: [{type: 'page'}, {type: 'post'}],
      hidden: ({parent, value}) => parent?.type && parent?.type === 'external',
    }),
  ],
})
