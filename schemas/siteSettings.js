import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site settings',
  type: 'document',
  i18n: true,
  groups: [
    {name: 'startPage', title: 'Start page', default: true},
    {name: 'navigation', title: 'Navigation'},
    {name: 'footer', title: 'Footer'},
    {name: 'post', title: 'Post'},
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
      title: 'Post settings',
      type: 'postSettings',
      group: 'post',
    }),
  ],
})
