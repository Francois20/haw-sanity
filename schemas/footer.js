import {defineField, defineType} from 'sanity'

export const footer = defineType({
  name: 'footer',
  type: 'object',
  title: 'Footer',
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
      name: 'secondaryLinks',
      title: 'Small links',
      type: 'array',
      of: [{type: 'link'}],
    }),
    defineField({
      name: 'soMeLinks',
      title: 'Social media links',
      type: 'array',
      of: [{type: 'soMeLink'}],
    }),
    defineField({
      name: 'locales',
      title: 'Locales',
      type: 'locales',
    }),
  ],
})
