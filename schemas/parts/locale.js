import {defineField, defineType} from 'sanity'

export const locale = defineType({
  name: 'locale',
  type: 'object',
  title: 'Locale',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        },
      ],
    }),
  ],
})
