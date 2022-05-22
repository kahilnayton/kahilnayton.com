export const CONTENTFUL_SPACE_CONFIGS = {
  spaceId: process.env.CONTENTFUL_SPACE_ID ?? '',
  accessToken: process.env.CONTENTFUL_CONTENT_DELIVERY_API_KEY ?? '',
  previewAccessToken: process.env.CONTENTFUL_CONTENT_PREVIEW_API_KEY ?? '',
  host: process.env.CONTENTFUL_PUBLIC_CONTENTFUL_HOST_EAA ?? '',
  previewHost: process.env.CONTENTFUL_PUBLIC_CONTENTFUL_PREVIEW_HOST ?? '',
  environment: process.env.CONTENTFUL_ENV ?? '',
}

export const NEXT_CONFIGS = {
  revalidateTime: parseInt(process.env.REVALIDATE_TIME ?? '') || 60,
}
