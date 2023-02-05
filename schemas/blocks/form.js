import { defineField, defineType } from "sanity";

export const form = defineType ({
  name: "form",
  type: "object",
  title: "Form",
  fields: [
    defineField ({
      name: 'nameLabel',
      type: 'string',
      title: 'Name Label'
    }),
    defineField ({
      name: 'emailLabel',
      type: 'email',
      title: 'Email Label'
    }),
    defineField ({
      name: 'textLabel',
      type: 'text',
      title: 'Text Label'
    }),
    defineField ({
      name: 'submitText',
      type: 'text',
      title: 'Submit Text'
    }),
  ]
})