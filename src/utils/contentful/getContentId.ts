import type { Entry } from 'contentful'

export const getContentModelId = (content: Entry<any>) =>
  content?.sys.contentType.sys.id
