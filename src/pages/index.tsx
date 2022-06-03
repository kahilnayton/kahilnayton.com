import TwoColumns from '@/components/layouts/TwoColumn'
import SubNav from '@/components/sections/SubNav'
import SEO from '@/components/SEO'
import Hero from '@/components/shared/ui/Hero'
import { RichText } from '@/components/shared/ui/RichText/RichText'
import { VideoPlayer } from '@/components/shared/ui/VideoPlayer'
import { links } from '@/lib'
import { Inner } from '@/styles'
import { getContentModel, GetContentModelParams } from '@/utils/contentful'

const Home = ({ page }: { page: any }) => {
  const { featured, youTubeUrl, videoThumbnail, description, content } =
    page.fields || {}

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
      <Inner paddingHorizontal={true}>
        {content && <RichText content={content} />}
      </Inner>
      {youTubeUrl && (
        <Inner paddingHorizontal={true}>
          <h1 id="video">New Video!</h1>
          <VideoPlayer
            mediaUrl={youTubeUrl}
            thumbnailUrl={videoThumbnail?.fields.file.url}
            spacingTop={true}
          />
        </Inner>
      )}
      {featured &&
        featured.map((item: any, i: number) => {
          const reversed = i % 2 === 0
          return (
            <Inner key={i} paddingHorizontal={true}>
              <TwoColumns reverse={reversed} {...item.fields} />
            </Inner>
          )
        })}
    </>
  )
}

export default Home

export const getServerSideProps = async (params: GetContentModelParams) => {
  const page = await getContentModel({
    ...params,
    slug: 'home',
  })
  return {
    props: { page },
  }
}
