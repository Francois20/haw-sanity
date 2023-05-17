import {defineField, defineType} from 'sanity'

export const colorPicker = defineType({
  name: 'colorPicker',
  title: 'Color picker',
  type: 'document',
  fields: [
    defineField({
      name: 'value',
      type: 'string',
      initialValue: '#4497D3',
      options: {
        list: [
          {title: 'Blue', value: '#4497D3'},
          {title: 'Orange', value: '#EC6726'},
          {title: 'Pink', value: '#E8378C'},
          {title: 'Marine', value: '#003553'},
          {title: 'Turqouise', value: '#48B9B2'},
          {title: 'Purple', value: '#9185BE'},
        ],
        layout: 'radio',
      },
    }),
  ],
})
