import {defineField, defineType} from 'sanity'

export const faq = defineType({
  name: 'faq',
  type: 'object',
  title: 'FAQ',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'searchPlaceholder',
      type: 'string',
      title: 'Search placeholder',
    }),
    defineField({
      name: 'searchButton',
      type: 'string',
      title: 'Search button',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'faqList',
      type: 'array',
      title: 'Questions and answers',
      of: [
        {
          name: 'faqItem',
          type: 'object',
          title: 'item',
          fields: [
            defineField({
              name: 'question',
              type: 'text',
              rows: 2,
              title: 'Question',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'answer',
              type: 'portableText',
              title: 'Answer',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'tags',
              type: 'array',
              title: 'Tags',
              of: [
                {
                  type: 'object',
                  name: 'tag',
                  fields: [
                    defineField({
                      name: 'tag',
                      type: 'reference',
                      to: [{type: 'faqTag'}],
                    }),
                  ],
                  preview: {
                    select: {
                      name: 'tag.title',
                    },
                    prepare(selection) {
                      const {name} = selection
                      return {
                        title: name,
                      }
                    },
                  },
                },
              ],
            }),
          ],
          preview: {
            select: {
              title: 'question',
            },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare: () => {
      return {title: 'FAQ'}
    },
  },
})
