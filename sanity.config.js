import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {withDocumentI18nPlugin} from '@sanity/document-internationalization'
import {deskStructure} from './deskStructure'

export default defineConfig({
  name: 'default',
  title: 'HAWStudio',

  projectId: 'szdcwwtw',
  dataset: 'production',

  plugins: withDocumentI18nPlugin(
    [
      deskTool({
        structure: deskStructure,
      }),
      visionTool(),
    ],
    {
      base: 'en-us',
      languages: [
        {
          title: 'English',
          id: 'en-us',
        },
        {
          title: 'Swedish',
          id: 'sv-se',
        },
      ],
      idStructure: 'delimiter',
      referenceBehavior: 'strong',
      withTranslationsMaintenance: false,
      fieldNames: {
        lang: '__i18n_lang',
        references: '__i18n_refs',
        baseReference: '__i18n_base',
      },
    }
  ),

  schema: {
    types: schemaTypes,
  },
})
