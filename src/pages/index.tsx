import TwoColumns from '@/components/layouts/TwoColumn'
import SubNav from '@/components/sections/SubNav'
import SEO from '@/components/SEO'
import Hero from '@/components/shared/ui/Hero'
import { data, links } from '@/lib'

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
