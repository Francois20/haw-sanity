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
        .child(
          S.documentList()
            .title('Pages')
            .filter('_type == $type && __i18n_lang == "en-us"')
            .params({type: 'page'})
        ),
      S.divider(),
      S.listItem()
        .title('Posts')
        .child(
          S.documentList()
            .title('Posts')
            .filter('_type == $type && __i18n_lang == "en-us"')
            .params({type: 'post'})
        ),
      S.listItem()
        .title('Authors')
        .child(S.documentList().title('Authors').filter('_type == $type').params({type: 'author'})),
      S.listItem()
        .title('Blog categories')
        .child(
          S.documentList()
            .title('Blog categories')
            .filter('_type == $type')
            .params({type: 'category'})
        ),
      S.divider(),
      S.listItem()
        .title('Price plans')
        .child(
          S.documentList()
            .title('Price plans')
            .filter('_type == $type && __i18n_lang == "en-us"')
            .params({type: 'pricePlan'})
        ),
      S.listItem()
        .title('Organization sizes')
        .child(
          S.documentList()
            .title('Organization sizes')
            .filter('_type == $type')
            .params({type: 'organizationSizes'})
        ),
      S.divider(),

      S.listItem()
        .title('FAQ tags')
        .child(
          S.documentList().title('FAQ tags').filter('_type == $type').params({type: 'faqTag'})
        ),
    ])
