import { config } from '@/lib/config'
import Head from 'next/head'
import React from 'react'

const SEO = (props: Record<string, string>) => {
  return (
    <Head>
      <title>{config.title || props.title}</title>
      <meta
        name="description"
        content={`Learn more about ${props.title || config.title}`}
      />
      <meta property="og:title" content={props.title || config.title} />
      <meta
        property="og:description"
        content={props.description || config.description}
      />
      <meta property="og:url" content={props.url || config.url} />
      <meta property="og:type" content="website" />
      <link rel="icon" href="/images/SVG/kahil_logo.svg" />
    </Head>
  )
}

export default SEO
