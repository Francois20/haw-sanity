import {defineField, defineType} from 'sanity'

export const login = defineType({
  name: 'login',
  type: 'object',
  title: 'login',
  fields: [
    defineField({
      name: 'url',
      type: 'url',
      title: 'URL',
    }),
  ],
})
