import {defineField, defineType} from 'sanity'

export const link = defineType({
  name: 'link',
  type: 'object',
  title: 'Link',
  fields: [
    defineField({
      name: 'linkText',
      type: 'string',
      title: 'Link Text',
    }),
    defineField({
      name: 'linkType',
      type: 'string',
      title: 'Link type',
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
      hidden: ({parent, value}) => parent?.linkType && parent?.linkType === 'internal',
    }),
    defineField({
      name: 'internalLink',
      type: 'reference',
      to: [{type: 'page'}, {type: 'post'}],
      hidden: ({parent, value}) => parent?.linkType && parent?.linkType === 'external',
    }),
  ],
})
