import {defineField, defineType} from 'sanity'

export const page = defineType({
  name: 'page',
  type: 'document',
  title: 'Page',
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
        {type: 'callToAction'},
        {type: 'form'},
        {type: 'video'},
        {type: 'logos'},
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
