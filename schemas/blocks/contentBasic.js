import {defineField, defineType} from 'sanity'
import {SquareIcon} from '@sanity/icons'

export const contentBasic = defineType({
  name: 'contentBasic',
  type: 'object',
  title: 'Content Basic',
  icon: SquareIcon,
  fields: [
    defineField({
      name: 'tag',
      type: 'string',
      title: 'Tag',
    }),
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Heading',
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
      title: 'Call to action',
    }),
    defineField({
      name: 'image',
      type: 'imageAlt',
      title: 'Image',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare: () => {
      return {
        title: 'Content Basic',
        media: SquareIcon,
      }
    },
  },
})
