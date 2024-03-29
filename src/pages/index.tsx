import TwoColumns from '@/components/layouts/TwoColumn'
import SubNav from '@/components/sections/SubNav'
import SEO from '@/components/SEO'
import Hero from '@/components/shared/ui/Hero'
import { RichText } from '@/components/shared/ui/RichText/RichText'
import { VideoPlayer } from '@/components/shared/ui/VideoPlayer'
import { links } from '@/lib'
import { Inner } from '@/styles'
import type { GetContentModelParams } from '@/utils/contentful'
import { getContentModel } from '@/utils/contentful'

export const BAND_CAMP_ID = 'BEQ3KcaymHcAiFwZDrH9l'

const Home = ({ page }: { page: any }) => {
  const { featured, youTubeUrl, videoThumbnail, description, content } =
    page?.fields || {}

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

      {featured &&
        featured.map((item: any, i: number) => {
          const reversed = i % 2 === 0
          const contentId = item.sys.id
          return (
            <Inner key={i} paddingHorizontal={true}>
              <TwoColumns
                contentId={contentId}
                reverse={reversed}
                {...item.fields}
              />
            </Inner>
          )
        })}
      {youTubeUrl && (
        <Inner paddingHorizontal={true}>
          <h1 id="video">Video</h1>
          <VideoPlayer
            mediaUrl={youTubeUrl}
            thumbnailUrl={videoThumbnail?.fields.file.url}
            spacingTop={true}
          />
        </Inner>
      )}
      {/* <Inner paddingHorizontal={true}>
        <VideoPlayer
          thumbnailUrl={'/images/tame_me.png'}
          mediaUrl={'https://www.youtube.com/watch?v=JtHJyWn94VA'}
          spacingTop={true}
        />
      </Inner> */}
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
