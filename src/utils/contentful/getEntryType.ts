import type { Entry } from 'contentful'

export const getTypeId = <T>(entry: Entry<T>): string =>
  entry?.sys?.contentType?.sys?.id
