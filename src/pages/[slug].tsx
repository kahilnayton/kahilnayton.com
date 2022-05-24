import SubNav from '@/components/sections/SubNav'
import SEO from '@/components/SEO'
import Hero from '@/components/shared/ui/Hero'
import { links } from '@/lib'
import { getContentModel, GetContentModelParams } from '@/utils/contentful'
import type { GetStaticPaths } from 'next'
import ErrorPage from 'next/error'

const About = ({ page }: { page: any }) => {
  if (!page) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <>
      <SEO openGraphType="website" schemaType="home" />
      <Hero />
      <SubNav links={links} />
    </>
  )
}

export default About

export const getServerSideProps = async (params: GetContentModelParams) => {
  const page = await getContentModel({
    ...params,
  })
  return {
    props: { page },
  }
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}
