import {defineField, defineType} from 'sanity'
import {ImageIcon} from '@sanity/icons'

export const hero = defineType({
  name: 'hero',
  type: 'object',
  title: 'Hero',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'orientation',
      title: 'Orientation',
      type: 'string',
      initialValue: 'left',
      options: {
        list: [
          {title: 'Left', value: 'left'},
          {title: 'Right', value: 'right'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Heading',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      type: 'text',
      title: 'Tagline',
      rows: 4,
    }),
    defineField({
      name: 'link',
      type: 'link',
      title: 'Call To Action',
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
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background color',
      type: 'string',
      initialValue: '#4497D3',
      options: {
        list: [
          {title: 'Blue', value: '#4497D3'},
          {title: 'Orange', value: '#EC6726'},
          {title: 'Pink', value: '#E8378C'},
          {title: 'Turqouise', value: '#48B9B2'},
          {title: 'Purple', value: '#9185BE'},
        ],
        layout: 'radio',
      },
    }),
  ],
  preview: {
    prepare: () => {
      return {
        title: 'Hero',
        media: ImageIcon,
      }
    },
  },
})
