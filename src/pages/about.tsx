import Hero from 'components/_ui/Hero'
import SubNav from 'components/sections/SubNav'
import { links, about } from 'lib'
import { Inner } from 'styles/structure'
import SEO from '@/components/SEO'

export default function About() {
  return (
    <>
      <SEO openGraphType="website" schemaType="about" description={about[0]} />
      <Hero />
      <SubNav links={links} />
      <Inner>
        {about.map((a, i) => (
          <p key={i}>{a}</p>
        ))}
      </Inner>
    </>
  )
}
