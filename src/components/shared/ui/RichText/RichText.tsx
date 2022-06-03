import { IconLink } from '@/components/shared/ui/Link/IconLink'
import {
  documentToReactComponents,
  Options,
} from '@contentful/rich-text-react-renderer'
import { BLOCKS, Document, INLINES } from '@contentful/rich-text-types'

const richTextRenderOptions: Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <p>{children}</p>
    },
    [BLOCKS.HEADING_1]: (node, children) => {
      return <h1>{children}</h1>
    },
    [BLOCKS.HEADING_2]: (node, children) => {
      return <h2>{children}</h2>
    },
    [BLOCKS.HEADING_3]: (node, children) => {
      return <h3>{children}</h3>
    },
    [BLOCKS.HEADING_4]: (node, children) => {
      return <h4>{children}</h4>
    },
    [INLINES.HYPERLINK]: (node, children) => {
      return (
        <a target="_blank" rel="noopener noreferrer" href={node.data.uri}>
          {children}
        </a>
      )
    },
    [INLINES.EMBEDDED_ENTRY]: (node, children) => {
      if (node.data.target.sys.contentType.sys.id === 'link') {
        return (
          <IconLink
            label={node.data.target.fields.label}
            location={node.data.target.fields.location}
            icon={node.data.target.fields.icon.fields.file.url}
          />
        )
      }
    },
  },
}

export type RichTextProps = {
  content: Document
  richTextOptions?: Options
}

export const RichText = ({
  content,
  richTextOptions = richTextRenderOptions,
}: RichTextProps) => {
  return documentToReactComponents(
    content,
    richTextOptions,
  ) as React.ReactElement
}
