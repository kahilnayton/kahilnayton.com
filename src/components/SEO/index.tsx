import { config } from '@/lib/config'
import Head from 'next/head'
import React from 'react'

const SEO = (props: Record<string, string>) => {
  return (
    <Head>
      <title>{props.title || config.title}</title>
      <meta
        name="description"
        content={props.description || config.description}
      />
      <meta property="og:title" content={props.title || config.title} />
      <meta
        property="og:description"
        content={props.description || config.description}
      />
      <meta property="og:image" content="/images/final-color-square.jpg" />
      <meta property="og:url" content={props.url || config.url} />
      <meta property="og:type" content="website" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="UTF-8" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default SEO
