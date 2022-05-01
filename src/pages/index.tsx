import Hero from 'components/_ui/Hero'
import SubNav from 'components/sections/SubNav'
import TwoColumns from 'components/layouts/TwoColumn'
import { data, links } from 'lib'
import SEO from '@/components/SEO'

const Home = () => {
  return (
    <>
      <SEO
        openGraphType="website"
        schemaType="article"
        title="The Fate of Empires"
        description="The only thing we learn from history, it has been said, 'is that men never learn from history'..."
      />
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
