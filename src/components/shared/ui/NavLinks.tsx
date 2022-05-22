import Link from 'next/link'
import type { LinkType } from '@/lib'
import { useRouter } from 'next/router'

type SubNavProps = {
  links: LinkType[]
}

export default function NavLinks({ links }: SubNavProps) {
  const router = useRouter()
  return (
    <>
      {links.map((link, i) => {
        const hideRoute = router.asPath.includes(link.label.toLowerCase())

        return !link.page ? (
          <a key={`link_${i}`} href={`/#${link.href}`}>
            {link.label}
          </a>
        ) : !hideRoute ? (
          <Link key={`link_${i}`} href={link.page + `#${link.href}`}>
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
