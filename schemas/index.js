import {siteSettings} from './siteSettings'
import {post} from './post'
import {page} from './page'
import {parts} from './parts'
import {blocks} from './blocks'
import {footer} from './footer'
import {references} from './references'
import {pricePlan} from './pricePlan'
import {postSettings} from './postSettings'
import {error} from './error'

export const schemaTypes = [
  ...parts,
  ...blocks,
  ...references,
  post,
  pricePlan,
  page,
  footer,
  error,
  siteSettings,
  postSettings,
]
