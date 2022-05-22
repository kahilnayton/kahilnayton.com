const YOUTUBE_EMBED_URL = 'https://www.youtube.com/embed'
const YOUTUBE_EMBED_REGEX = /(youtube.com\/embed\/)([a-zA-Z0-9_-]{11})($|\?.*)/
const YOUTUBE_REGEX = /(youtube.com\/watch\?v=)([a-zA-Z0-9_-]{11})($|\?.*)/

export const isYoutube = (url: string): boolean => /youtube.com/.test(url)

/**
 * Transforms `https://www.youtube.com/watch?v=*` into `https://www.youtube.com/embed/*`
 * @param url
 */
export const standardizeYoutubeUrl = (url: string) => {
  const youtubeIdMatch = url.match(YOUTUBE_REGEX)

  if (youtubeIdMatch) {
    const id = youtubeIdMatch[2]
    return `${YOUTUBE_EMBED_URL}/${id}`
  }

  return url
}

export const getYoutubeVideoId = (url: string) => {
  const youtubeIdMatch = url.match(YOUTUBE_EMBED_REGEX)
  const youtubeId = youtubeIdMatch && youtubeIdMatch[2]
  return youtubeId
}

export const getYoutubeThumbnail = (url: string): string => {
  const youtubeId = getYoutubeVideoId(url)

  return !youtubeId
    ? ''
    : `https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg`
}
