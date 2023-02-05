import {defineField, defineType} from 'sanity'

export const login = defineType({
  name: 'login',
  type: 'object',
  title: 'Login',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
    }),
    defineField({
      name: 'url',
      type: 'url',
      title: 'URL',
    }),
  ],
})
