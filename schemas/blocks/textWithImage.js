import { defineField, defineType } from "sanity";


export const textWithImage = defineType ({
  name: "textWithImage",
  type: "object",
  title: "Text with Image",
  fields: [
    defineField ({
      name: 'heading',
      type: 'string',
      title: 'Heading'
    }),
    defineField ({
      name: 'tagline',
      type: 'string',
      title: 'Tagline'
    }),
    defineField ({
      name: 'excerpt',
      type: 'text',
      title: 'Excerpt'
    }),
    defineField ({
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text'
        }
      ]
    })
  ]
})