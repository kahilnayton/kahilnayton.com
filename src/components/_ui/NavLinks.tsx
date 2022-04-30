import Link from 'next/link'
import type { LinkType } from 'lib'

type SubNavProps = {
  links: LinkType[]
}

export default function NavLinks({ links }: SubNavProps) {
  return (
    <>
      {links.map((link, i) => {
        return link.href ? (
          <a key={`link_${i}`} href={`#${link.href}`}>
            {link.label}
          </a>
        ) : (
          <Link key={`link_${i}`} href={link.page}>
            {link.label}
          </Link>
        )
      })}
    </>
  )
}
