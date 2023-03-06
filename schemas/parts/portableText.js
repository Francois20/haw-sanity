import { defineType } from 'sanity'

export const portableText = defineType ({
  name: 'portableText',
  title: 'Portable text',
  type: 'array',
  of: [
    {
      type: 'block',
      title: 'Block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H3', value: 'h3' }],
      lists: [
        { title: 'Bullet', value: 'bullet' }, 
        { title: 'Numbered', value: 'number' }
      ],
      marks: {
        decorators: [
        { title: 'Strong', value: 'strong' },
        { title: 'Emphasis', value: 'em' }],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'URL',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              }
            ]
          },
          {
            name: 'internalLink',
            type: 'object',
            title: 'Internal link',
            fields: [
              {
                name: 'item',
                type: 'reference',
                title: 'Reference',
                to: [
                  { type: 'page' },
                ]
              }
            ]
          }
        ]
      }
    },
    {
      type: 'image'
    }
  ]
})