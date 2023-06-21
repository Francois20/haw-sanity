import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site settings',
  type: 'document',
  i18n: true,
  groups: [
    {name: 'startPage', title: 'Start page', default: true},
    {name: 'post', title: 'Post page'},
    {name: 'error', title: 'Error page'},
    {name: 'navigation', title: 'Navigation'},
    {name: 'footer', title: 'Footer'},
  ],
  fields: [
    defineField({
      name: 'startPage',
      title: 'Start page',
      type: 'reference',
      group: 'startPage',
      to: {type: 'page'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'navigation',
      title: 'Navigation',
      type: 'navigation',
      group: 'navigation',
    }),
    defineField({
      name: 'footer',
      title: 'Footer',
      type: 'footer',
      group: 'footer',
    }),
    defineField({
      name: 'post',
      title: 'Post page',
      type: 'postSettings',
      group: 'post',
    }),
    defineField({
      name: 'error',
      title: 'Error page',
      type: 'error',
      group: 'error',
    }),
  ],
  preview: {
    prepare: () => {
      return {
        title: 'Site Settings',
      }
    },
  },
})
