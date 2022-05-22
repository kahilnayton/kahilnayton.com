import { createClient } from 'contentful'

export const previewClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID ?? '',
  accessToken: process.env.CONTENTFUL_CONTENT_PREVIEW_API_KEY ?? '',
  host: 'preview.contentful.com',
})
