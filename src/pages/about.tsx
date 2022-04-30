import Hero from 'components/_ui/Hero'
import SubNav from 'components/sections/SubNav'
import { data, links } from 'lib'
import { Inner } from 'styles/structure'

export default function About() {
  return (
    <>
      <Hero />
      <SubNav links={links} />
      <Inner>
        {data.about.map((a, i) => (
          <p key={i}>{a}</p>
        ))}
      </Inner>
    </>
  )
}
