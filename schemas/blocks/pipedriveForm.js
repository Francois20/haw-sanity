import {defineField, defineType} from 'sanity'
import {EnvelopeIcon} from '@sanity/icons'

export const pipedriveForm = defineType({
  name: 'pipedriveForm',
  type: 'object',
  title: 'Pipedrive Form',
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
      name: 'formId',
      type: 'string',
      title: 'Form ID',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare: () => {
      return {title: 'Pipedrive Form'}
    },
  },
})
