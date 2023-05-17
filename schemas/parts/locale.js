import {defineField, defineType} from 'sanity'

export const locale = defineType({
  name: 'locale',
  type: 'object',
  title: 'Locale',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'code',
      type: 'string',
      title: 'Code',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          validation: (Rule) => Rule.required(),
        },
      ],
    }),
  ],
})
