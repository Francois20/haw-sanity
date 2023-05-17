import {defineType} from 'sanity'

export const imageAlt = defineType({
  name: 'imageAlt',
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
})
