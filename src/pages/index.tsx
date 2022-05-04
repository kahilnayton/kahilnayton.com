import SEO from '@/components/SEO'
import TwoColumns from 'components/layouts/TwoColumn'
import SubNav from 'components/sections/SubNav'
import Hero from 'components/_ui/Hero'
import { data, links } from 'lib'

const Home = () => {
  return (
    <>
      <SEO openGraphType="website" schemaType="home" />
      <Hero />
      <SubNav links={links} />
      {Object.keys(data).map((keyName: string, i) => {
        // @ts-ignore
        return <TwoColumns key={i} {...data[keyName]} />
      })}
    </>
  )
}

export default Home
