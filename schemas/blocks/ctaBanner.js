import { defineField, defineType } from "sanity";
import {StarIcon} from '@sanity/icons'

export const ctaBanner = defineType ({
  name: "ctaBanner",
  type: "object",
  title: "CTA Banner",
  icon: StarIcon,
  fields: [
    defineField ({
      name: 'text1',
      type: 'string',
      title: 'Text row 1',
      validation: (Rule) => Rule.required(),
    }),
    defineField ({
      name: 'text2',
      type: 'string',
      title: 'Text row 2'
    }),
    defineField ({
      name: 'link',
      type: 'link',
      title: 'Link',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare: () => {
      return {
        title: 'CTA Banner',
        media: StarIcon
      }
    },
  },
})