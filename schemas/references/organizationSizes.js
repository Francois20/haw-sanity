import {defineField, defineType} from 'sanity'

export const organizationSizes = defineType({
  name: 'organizationSizes',
  title: 'Organization sizes',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Size',
      type: 'string',
    }),
  ],
})
