import {defineField, defineType} from 'sanity'

export const price = defineType({
  name: 'price',
  type: 'object',
  title: 'Price',
  fields: [
    defineField({
      name: 'organizationSize',
      type: 'reference',
      title: 'Organization size',
      to: [{type: 'organizationSizes'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'monthlyFee',
      type: 'string',
      title: 'Monthly fee',
    }),
    defineField({
      name: 'startFee',
      type: 'string',
      title: 'Start fee',
    }),
  ],
  preview: {
    select: {
      name: 'organizationSize.title',
    },
    prepare(selection) {
      const {name} = selection
      return {
        title: name,
      }
    },
  },
})
