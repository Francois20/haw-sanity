import {defineField, defineType} from 'sanity'

export const logos = defineType({
  name: 'logos',
  type: 'object',
  title: 'Logos',
  fields: [
    defineField({
      name: 'text',
      type: 'string',
      title: 'Text',
    }),
    defineField({
      name: 'images',
      title: 'Images (maximum 8)',
      type: 'array',
      of: [{type: 'imageAlt'}],
      validation: (Rule) =>
        Rule.custom((value) => {
          if (value && value?.length > 8) {
            return 'You can insert only 8 logos.';
          }
          return true;
        }),
    }),
  ],
  preview: {
    prepare: () => {
      return {title: 'Logos'}
    },
  },
})
