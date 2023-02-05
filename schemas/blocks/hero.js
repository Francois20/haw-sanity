import { defineField, defineType } from "sanity";

export const hero = defineType ({
  name: "hero",
  type: "object",
  title: "Hero",
  fields: [
    defineField ({
      name: 'heading',
      type: 'string',
      title: 'Heading'
    }),
    defineField ({
      name: 'tagline',
      type: 'text',
      title: 'Tagline'
    }),
    defineField ({
      name: 'cta',
      type: 'callToAction',
      title: 'Call To Action'
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