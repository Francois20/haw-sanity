import {defineField, defineType} from 'sanity'

export const page = defineType({
  name: 'page',
  type: 'document',
  title: 'Pages',
  i18n: true,
  groups: [
    {name: 'content', title: 'Content', default: true},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
    }),
    defineField({
      name: 'pageBuilder',
      title: 'Page builder',
      type: 'array',
      group: 'content',
      of: [
        {type: 'hero'},
        {type: 'textImageButton'},
        {type: 'form'},
        {type: 'video'},
        {type: 'logos'},
        {type: 'posts'},
        {type: 'latestPost'},
        {type: 'twoLatestPosts'},
        {type: 'quote'},
        {type: 'ctaBanner'},
        {type: 'content'},
        {type: 'usps'},
        {type: 'pricing'},
        {type: 'customerStories'},
        {type: 'faq'},
        {type: 'contentMulti'},
      ],
    }),
  ],
  preview: {
    select: {
      title: 'seo',
    },
    prepare: ({title}) => {
      const firstLetterCap = title.slug.current.charAt(0).toUpperCase()
      const remainingLetters = title.slug.current.slice(1)
      const capitalizedWord = firstLetterCap + remainingLetters
      return {title: capitalizedWord}
    },
  },
})
