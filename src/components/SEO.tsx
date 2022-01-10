import Head from 'next/head';
import { config } from 'lib/config';

export default function SEO() {
  const siteTitle = config.title;

  return (
    <Head>
      <title>{config.title}</title>
      <meta name="description" content={config.description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={config.title} />
      <meta property="og:description" content={config.description} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content={config.social.twitter} />
      <meta property="twitter:title" content={config.title} />
      <meta property="twitter:description" content={config.description} />
    </Head>
  );
}
