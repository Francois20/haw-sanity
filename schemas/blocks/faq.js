import {defineField, defineType} from 'sanity'
import {UnknownIcon} from '@sanity/icons'

export const faq = defineType({
  name: 'faq',
  type: 'object',
  title: 'FAQ',
  icon: UnknownIcon,
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
              validation: (Rule) =>
                Rule.custom((content) => {
                  return content.length > 0
                    ? true
                    : {
                        message: 'A FAQ item needs at least one tag',
                      }
                }),
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
                      name: 'tag.title.en',
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
      return {
        title: 'FAQ',
        media: UnknownIcon,
      }
    },
  },
})
