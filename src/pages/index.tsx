import Hero from 'components/_ui/Hero'
import SubNav from 'components/sections/SubNav'
import TwoColumns from 'components/layouts/TwoColumn'
import { data, links } from 'lib'

const Home = () => {
  return (
    <>
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
