import {defineField, defineType} from 'sanity'
import {EnvelopeIcon} from '@sanity/icons'

export const form = defineType({
  name: 'form',
  type: 'object',
  title: 'Form',
  icon: EnvelopeIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'text',
      type: 'portableText',
      title: 'Text',
    }),
    defineField({
      name: 'nameLabel',
      type: 'string',
      title: 'Name Label',
    }),
    defineField({
      name: 'emailLabel',
      type: 'string',
      title: 'Email Label',
    }),
    defineField({
      name: 'messageLabel',
      type: 'string',
      title: 'Message Label',
    }),
    defineField({
      name: 'submitText',
      type: 'string',
      title: 'Submit Text',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare: () => {
      return {
        title: 'Contact Form',
        media: EnvelopeIcon
      }
    },
  },
})
