import type { Entry } from 'contentful'

export const getEntryProps = <T, F extends Partial<T>>(
  entry: Entry<T> | undefined,
  fallback: F | undefined,
): F & Partial<T> => {
  return { ...fallback, ...entry?.fields } as F & Partial<T>
}
