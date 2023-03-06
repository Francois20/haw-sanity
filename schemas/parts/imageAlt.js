import {defineType} from 'sanity'

export const imageAlt = defineType({
  name: 'imageAlt',
  type: 'document',
  title: 'Image',
  fields: [
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      validation: (Rule) => Rule.required(),
    },
  ],
})
