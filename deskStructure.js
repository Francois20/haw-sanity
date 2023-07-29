import {CogIcon} from '@sanity/icons'

export const deskStructure = (S) =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Site Settings')
        .icon(CogIcon)
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      S.divider(),
      S.listItem()
        .title('Pages')
        .child(S.documentList().title('Pages').filter('_type == "page" && __i18n_lang == "en-us"')),
      S.divider(),
      S.listItem()
        .title('Posts')
        .child(S.documentList().title('Posts').filter('_type == "post" && __i18n_lang == "en-us"')),
      S.listItem()
        .title('Authors')
        .child(S.documentList().title('Authors').filter('_type == "author"')),
      S.listItem()
        .title('Blog categories')
        .child(S.documentList().title('Blog categories').filter('_type == "category"')),
      S.divider(),
      S.listItem()
        .title('Price plans')
        .child(
          S.documentList()
            .title('Price plans')
            .filter('_type == "pricePlan" && __i18n_lang == "en-us"')
        ),
      S.listItem()
        .title('Organization sizes')
        .child(S.documentList().title('Organization sizes').filter('_type == "organizationSizes"')),
      S.divider(),

      S.listItem()
        .title('FAQ tags')
        .child(S.documentList().title('FAQ tags').filter('_type == "faqTag"')),
    ])
