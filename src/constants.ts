export const CONTENTFUL_SPACE_CONFIGS = {
  spaceId: process.env.NEXT_PUBLIC_SPACE_ID ?? '',
  accessToken: process.env.NEXT_PUBLIC_CONTENT_DELIVERY_API_KEY ?? '',
  previewAccessToken: process.env.NEXT_PUBLIC_CONTENT_PREVIEW_API_KEY ?? '',
  host: process.env.NEXT_PUBLIC_CONTENTFUL_HOST ?? '',
  previewHost: process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_HOST ?? '',
  environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENV ?? 'master',
}

export const NEXT_CONFIGS = {
  revalidateTime: parseInt(process.env.REVALIDATE_TIME ?? '') || 60,
}
