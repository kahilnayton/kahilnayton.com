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
import { createClient } from 'contentful'

export const BAND_CAMP_ID = 'BEQ3KcaymHcAiFwZDrH9l'

const Home = ({ page }: { page: any }) => {
  console.log(page, 'page')

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
    </>
  )
}

export default Home

export async function getStaticProps() {
  const client = createClient({
    space: process.env.NEXT_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
  })

  const res = await client.getEntries({
    content_type: 'page',
    include: 10,
    'fields.slug': 'home',
  })

  return {
    props: {
      page: res.items[0],
    },
  }
}
