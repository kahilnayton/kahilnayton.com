import Link from 'next/link'
import type { LinkType } from 'lib'
import { useRouter } from 'next/router'

type SubNavProps = {
  links: LinkType[]
}

export default function NavLinks({ links }: SubNavProps) {
  const router = useRouter()
  console.log(router.asPath)
  return (
    <>
      {links.map((link, i) => {
        const hideRoute = router.asPath.includes(link.label.toLowerCase())

        return link.href ? (
          <a key={`link_${i}`} href={`#${link.href}`}>
            {!hideRoute && link.label}
          </a>
        ) : !hideRoute ? (
          <Link key={`link_${i}`} href={link.page}>
            {link.label}
          </Link>
        ) : (
          <Link key={`link_${i}`} href={'/'}>
            {'Home'}
          </Link>
        )
      })}
    </>
  )
}
