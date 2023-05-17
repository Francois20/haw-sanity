import {defineField, defineType} from 'sanity'

export const navigation = defineType({
  name: 'navigation',
  type: 'object',
  title: 'Navigation',
  fields: [
    defineField({
      name: 'logo',
      type: 'image',
      title: 'Logo',
    }),
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{type: 'link'}],
    }),
    defineField({
      name: 'cta',
      title: 'CTA',
      type: 'link',
    }),
  ],
})
