import TwoColumns from '@/components/layouts/TwoColumn'
import SubNav from '@/components/sections/SubNav'
import SEO from '@/components/SEO'
import Hero from '@/components/shared/ui/Hero'
import { VideoPlayer } from '@/components/shared/ui/VideoPlayer'
import { links } from '@/lib'
import { Inner } from '@/styles'
import { getContentModel, GetContentModelParams } from '@/utils/contentful'

const Home = ({ page }: { page: any }) => {
  const { featured, youTubeUrl, heroImage } = page.fields || {}

  // TODO: fix this logic
  // const getAnchorLinks = () => {
  //   return featured.map((item: any) => {
  //     return item.fields.slug
  //   })
  // }

  return (
    <>
      <SEO openGraphType="website" schemaType="home" />
      <Hero />
      <SubNav links={links} />
      {featured &&
        featured.map((item: any, i: number) => {
          const reversed = i % 2 === 0
          return (
            <Inner paddingHorizontal={true}>
              <TwoColumns reverse={reversed} {...item.fields} />
            </Inner>
          )
        })}
      {youTubeUrl && (
        <Inner paddingHorizontal={true}>
          <VideoPlayer
            mediaUrl={youTubeUrl}
            thumbnailUrl={heroImage?.fields.file.url}
          />
        </Inner>
      )}
    </>
  )
}

export default Home

export const getServerSideProps = async (params: GetContentModelParams) => {
  const page = await getContentModel({
    ...params,
  })
  return {
    props: { page },
  }
}
