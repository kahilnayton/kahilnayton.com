import type { ContentfulClientApi, Entry } from 'contentful'
import { createClient } from 'contentful'

import { CONTENTFUL_SPACE_CONFIGS } from '@/constants'

const defaultClient = createClient({
  space: CONTENTFUL_SPACE_CONFIGS.spaceId,
  accessToken: CONTENTFUL_SPACE_CONFIGS.accessToken,
  host: CONTENTFUL_SPACE_CONFIGS.host,
  environment: CONTENTFUL_SPACE_CONFIGS.environment,
})

const previewClient = createClient({
  space: CONTENTFUL_SPACE_CONFIGS.spaceId,
  accessToken: CONTENTFUL_SPACE_CONFIGS.previewAccessToken,
  host: CONTENTFUL_SPACE_CONFIGS.previewHost,
  environment: CONTENTFUL_SPACE_CONFIGS.environment,
})

export type GetContentModelParams = {
  isPreview?: boolean
  env?: string
  locale?: string

  slug?: string
  contentType?: string
  queryParams?: { [key: string]: string | number }
}

let previewClients: { [key: string]: ContentfulClientApi } = {
  default: previewClient,
}

export const getContentModel = async <T>(
  params: GetContentModelParams,
): Promise<Entry<T> | null> => {
  const results = await getContentModels<T>({
    ...params,
    queryParams: { ...params.queryParams, limit: 1 },
  })

  return results ? results[0] : null
}

export const getContentModels = async <T>({
  isPreview = true,
  env = 'default',
  locale,

  slug,
  contentType = 'page',
  queryParams = {},
}: GetContentModelParams): Promise<Entry<T>[] | null> => {
  const query = {
    include: 10,
    locale,
    content_type: contentType,
    ...(slug ? { 'fields.slug': slug } : {}),
    ...queryParams,
  }

  let client = isPreview ? previewClients[env] : defaultClient

  try {
    const result = await client.getEntries<T>(query)

    if (result.items.length > 0) {
      const resultWithoutCircularReferences = JSON.parse(
        result.stringifySafe(),
      ) as typeof result

      return resultWithoutCircularReferences.items
    }

    return null
  } catch (e) {
    return null
  }
}
