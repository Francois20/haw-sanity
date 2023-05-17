import {defineField, defineType} from 'sanity'

export const soMeLink = defineType({
  name: 'soMeLink',
  type: 'object',
  title: 'Social media link',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'image',
      type: 'imageAlt',
      title: 'Image',
    }),
    defineField({
      name: 'externalLink',
      type: 'url',
      title: 'URL',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
