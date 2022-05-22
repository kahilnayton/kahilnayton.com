import type { ComposePageEntry, ComposePageFields } from './types'

export const getComposeEntryProps = <T>(
  composePageOrEntry:
    | ComposePageEntry<T>
    | ComposePageFields<T>
    | undefined
    | null,
): (T | Partial<T>) & { composeSlug: string; publicationDate?: Date } => {
  const entry =
    (composePageOrEntry as ComposePageEntry<T>)?.fields ?? composePageOrEntry

  const fields: T | Partial<T> = entry?.content?.fields ?? {}

  return {
    ...fields,
    composeSlug: entry?.slug ?? '',
    publicationDate: entry?.publicationDate
      ? new Date(entry?.publicationDate)
      : undefined,
  }
}
