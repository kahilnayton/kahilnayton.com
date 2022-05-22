import type { Asset, Entry, EntryFields, Sys } from 'contentful'

export type MetaData = {
  metadata: { tags: Array<{ sys: Sys }> }
}

export type ComposePageEntry<TemplateFields> = MetaData &
  Sys &
  Entry<ComposePageFields<TemplateFields>>

export type ComposePageFields<TemplateFields = {}> = {
  title: EntryFields.Symbol
  name: EntryFields.Symbol
  slug: EntryFields.Symbol
  publicationDate: string
  content: Entry<TemplateFields>
  seo?: Entry<{
    name: EntryFields.Symbol
    title?: EntryFields.Symbol
    description?: EntryFields.Symbol
    keywords?: EntryFields.Symbol[]
    no_index?: EntryFields.Boolean
    no_follow?: EntryFields.Boolean
    image?: Asset
  }>
}
