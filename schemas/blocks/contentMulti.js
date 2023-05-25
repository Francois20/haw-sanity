import {defineField, defineType} from 'sanity'

export const contentMulti = defineType({
  name: 'contentMulti',
  type: 'object',
  title: 'Content Multi',
  fields: [
    defineField({
      name: 'items',
      type: 'array',
      title: 'Items',
      of: [
        {
          name: 'item',
          type: 'object',
          title: 'Item',
          fields: [
            defineField({
              name: 'tag',
              type: 'string',
              title: 'Tag',
            }),
            defineField({
              name: 'title',
              type: 'string',
              title: 'Title',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'text',
              type: 'portableText',
              title: 'Text',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'link',
              type: 'link',
              title: 'Link',
            }),
            defineField({
              name: 'image',
              type: 'imageAlt',
              title: 'Image',
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare: () => {
      return {title: 'Content Multi'}
    },
  },
})
