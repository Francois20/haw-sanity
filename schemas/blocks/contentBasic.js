import {defineField, defineType} from 'sanity'

export const contentBasic = defineType({
  name: 'contentBasic',
  type: 'object',
  title: 'Content Basic',
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Heading',
    }),
    defineField({
      name: 'text',
      type: 'portableText',
      title: 'Text',
    }),
    defineField({
      name: 'link',
      type: 'link',
      title: 'Call to action',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
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
  preview: {
    prepare: () => {
      return {title: 'Content Basic'}
    },
  },
})
