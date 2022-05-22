import { createClient } from 'contentful'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID ?? '',
  accessToken: process.env.CONTENTFUL_CONTENT_DELIVERY_API_KEY ?? '',
})

type GetPageParams = {
  pageContentType: string
  slug: string
  locale: string
}

export async function getPage(params: GetPageParams) {
  const query = {
    limit: 1,
    include: 10,
    locale: params.locale,
    'fields.slug': params.slug,
    content_type: params.pageContentType,
  }
  const {
    items: [page],
  } = await client.getEntries(query)
  return page || null
}
