import {defineField, defineType} from 'sanity'

export const pricing = defineType({
  name: 'pricing',
  type: 'object',
  title: 'Pricing',
  fields: [
    defineField({
      name: 'titleEmployees',
      type: 'string',
      title: 'Title of employee picker',
    }),
    defineField({
      name: 'text',
      type: 'text',
      title: 'Text',
      rows: 4,
    }),
    defineField({
      name: 'titleMonthlyFee',
      type: 'string',
      title: 'Monthly fee title',
    }),
    defineField({
      name: 'titleStartFee',
      type: 'string',
      title: 'Start fee title',
    }),
    defineField({
      name: 'items',
      type: 'array',
      title: 'Price plans',
      of: [
        {
          name: 'pricePlan',
          type: 'reference',
          to: [{type: 'pricePlan'}],
        },
      ],
    }),
  ],
  preview: {
    prepare: () => {
      return {title: 'Pricing'}
    },
  },
})
