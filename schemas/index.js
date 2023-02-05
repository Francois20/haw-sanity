import {siteSettings} from './siteSettings'
import {post} from './post'
import {page} from './page'
import {parts} from './parts'
import {blocks} from './blocks'

export const schemaTypes = [...parts, ...blocks, post, page, siteSettings]
