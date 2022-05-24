import TwoColumns from '@/components/layouts/TwoColumn'
import SubNav from '@/components/sections/SubNav'
import SEO from '@/components/SEO'
import Hero from '@/components/shared/ui/Hero'
import { VideoPlayer } from '@/components/shared/ui/VideoPlayer'
import { data, links } from '@/lib'
import { Inner } from '@/styles'
import { getContentModel, GetContentModelParams } from '@/utils/contentful'
import ErrorPage from 'next/error'

const Home = ({ page }: { page: any }) => {
  if (!page) {
    return <ErrorPage statusCode={404} />
  }

  console.log(page.fields.heroImage.fields.file.url)

  return (
    <>
      <SEO openGraphType="website" schemaType="home" />
      <Hero />
      <SubNav links={links} />
      {Object.keys(data).map((keyName: string, i) => {
        // @ts-ignore
        return <TwoColumns key={i} {...data[keyName]} />
      })}
      <Inner paddingHorizontal={true}>
        <VideoPlayer
          thumbnailUrl={page.fields.heroImage.fields.file.url}
          mediaUrl={page?.fields?.youTubeUrl}
        />
      </Inner>
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
