import TwoColumns from '@/components/layouts/TwoColumn'
import SubNav from '@/components/sections/SubNav'
import SEO from '@/components/SEO'
import Hero from '@/components/shared/ui/Hero'
import { VideoPlayer } from '@/components/shared/ui/VideoPlayer'
import { links } from '@/lib'
import { Inner } from '@/styles'
import { getContentModel, GetContentModelParams } from '@/utils/contentful'
import ErrorPage from 'next/error'

const Home = ({ page }: { page: any }) => {
  if (!page) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <>
      <SEO openGraphType="website" schemaType="home" />
      <Hero />
      <SubNav links={links} />
      {page.fields.featured &&
        page.fields.featured.map((featured: any, i: number) => (
          <TwoColumns
            key={i}
            title={featured.fields.title || ''}
            description={featured.fields.description || ''}
            body={featured.fields.body || ''}
            id={featured.fields.slug || ''}
            imageSrc={featured.fields.heroImage.fields.file.url}
          />
        ))}
      <Inner paddingHorizontal={true}>
        <VideoPlayer
          mediaUrl={page?.fields?.youTubeUrl}
          thumbnailUrl={page?.fields?.heroImage?.fields.file.url}
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
