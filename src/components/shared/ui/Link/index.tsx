import type { ReactElement } from 'react'

export type LinkComponent = (props: {
  children: ReactElement
  href: string
}) => ReactElement

export const DefaultLinkComponent: LinkComponent = ({ children, href }) => (
  <a>{children}</a>
)
