import {defineField, defineType} from 'sanity'
import {CreditCardIcon} from '@sanity/icons'

export const pricePlan = defineType({
  name: 'pricePlan',
  type: 'document',
  title: 'Price plans',
  icon: CreditCardIcon,
  i18n: true,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'string',
      title: 'Description',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'prices',
      type: 'array',
      title: 'Prices',
      of: [
        {
          type: 'price',
        },
      ],
    }),
    defineField({
      name: 'features',
      type: 'array',
      title: 'Features',
      of: [
        {
          name: 'feature',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'link',
      type: 'link',
      title: 'CTA',
    }),
    defineField({
      name: 'color',
      type: 'colorPicker',
      title: 'Color',
    }),
  ],
})
