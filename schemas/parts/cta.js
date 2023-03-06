import { defineField, defineType } from "sanity";

export const cta = defineType ({
  name: "callToAction",
  type: "object",
  title: "Call to Action",
  fields: [
    defineField ({
      name: 'linkText',
      type: 'string',
      title: 'Link Text'
    }),
    defineField ({
      name: 'link',
      type: 'link',
      title: 'Link'
    })
  ]
})