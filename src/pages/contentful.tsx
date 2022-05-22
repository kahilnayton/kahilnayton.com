/* new file: src/pages/[locale]/tutorials/[slug].tsx */
import { getContentModel } from '@/utils/contentful'
import ErrorPage from 'next/error'
import Head from 'next/head'
import React from 'react'

export type GetContentModelParams = {
  isPreview?: boolean
  env?: string
  locale?: string

  slug?: string
  contentType?: string
  queryParams?: { [key: string]: string | number }
}

const Contentful = ({ page }: { page: any }) => {
  if (!page) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <>
      <Head>
        <meta key="robots" name="robots" content="noindex,follow" />
        <meta key="googlebot" name="googlebot" content="noindex,follow" />
      </Head>
      <pre>{JSON.stringify(page, null, 4)}</pre>
    </>
  )
}

export default Contentful

export const getServerSideProps = async (params: GetContentModelParams) => {
  const page = await getContentModel({
    ...params,
  })
  return {
    props: { page },
  }
}
