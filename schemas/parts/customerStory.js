import {defineField, defineType} from 'sanity'

export const customerStory = defineType({
  name: 'customerStory',
  type: 'object',
  title: 'Customer Story',
  fields: [
    defineField({
      name: 'logo',
      type: 'imageAlt',
      title: 'Logo',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'imageAlt',
      title: 'Image',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
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
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
