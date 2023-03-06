import {defineField, defineType} from 'sanity'

export const locales = defineType({
  name: 'locales',
  type: 'object',
  title: 'Locales',
  fields: [
    defineField({
      name: 'localeEng',
      type: 'locale',
      title: 'English',
    }),
    defineField({
      name: 'localeSwe',
      type: 'locale',
      title: 'Swedish',
    }),
  ],
})
