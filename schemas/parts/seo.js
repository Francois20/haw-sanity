import {defineField, defineType} from 'sanity'

export const seo = defineType({
  title: 'SEO',
  name: 'seo',
  type: 'object',
  fieldsets: [{name: 'og', title: 'Open Graph'}],
  fields: [
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.max(60).warning(`A title shouldn't be longer than 60 characters`),
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'string',
      validation: (Rule) =>
        Rule.max(150).warning(`A description shouldn't be longer than 150 characters`),
    }),
    defineField({
      title: 'og:title',
      name: 'ogTitle',
      type: 'string',
      fieldset: 'og',
      validation: (Rule) =>
        Rule.max(60).warning('A title should not be longer than 60 characters.'),
    }),
    defineField({
      title: 'og:description',
      name: 'ogDescription',
      type: 'string',
      fieldset: 'og',
      validation: (Rule) =>
        Rule.max(300).warning('A longer description will be truncated by search engines.'),
    }),
    defineField({
      title: 'og:image 1200:630',
      name: 'ogImage',
      type: 'image',
      fieldset: 'og',
    }),
  ],
})
