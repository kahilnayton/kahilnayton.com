import SEO from '@/components/SEO'
import TwoColumns from '@/components/layouts/TwoColumn'
import SubNav from '@/components/sections/SubNav'
import Hero from '@/components/shared/ui/Hero'
import { data, links } from '@/lib'
import { VideoPlayer } from '@/components/shared/ui/VideoPlayer'

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
      <VideoPlayer mediaUrl="https://www.youtube.com/watch?v=9EQHdkZib8g" />
    </>
  )
}

export default Home
