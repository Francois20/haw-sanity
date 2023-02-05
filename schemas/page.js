import { defineField, defineType } from "sanity";

export const page = defineType ({  
  name: "page",
  type: "document",
  title: "Page",
  i18n: true,
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'targeting', title: 'Targeting' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({
      name: 'target',
      title: 'Targeting',
      type: 'target',
      group: 'targeting'
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo'
    }),
    defineField({
      name: 'pageBuilder',
      title: 'Page builder',
      type: 'array',
      group: 'content',
      of: [
        { type: 'hero' },
        { type: 'textWithImage' },
        { type: 'callToAction' },
        { type: 'form' },
        { type: 'video' },
        ]
    })
  ],
  preview: {
    select: {
      title: 'target',
    },
    prepare: ({ title }) => {
      const firstLetterCap = title.slug.current.charAt(0).toUpperCase()
      const remainingLetters = title.slug.current.slice(1)
      const capitalizedWord = firstLetterCap + remainingLetters
      return {title: capitalizedWord}
    }
  },
})