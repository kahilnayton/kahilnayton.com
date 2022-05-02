import { SitemapStream, streamToPromise } from 'sitemap'

const pagesSitemap = async (req: any, res: any) => {
  try {
    const smStream = new SitemapStream({
      hostname: `https://${req.headers.host}`,
      // @ts-ignore
      cacheTime: 600000,
    })

    // List of posts
    const pages: any[] = []

    // Create each URL row
    pages.forEach((page) => {
      smStream.write({
        url: `/${page.slug}`,
        changefreq: 'daily',
        priority: 0.9,
      })
    })

    // End sitemap stream
    smStream.end()

    // XML sitemap string
    const sitemapOutput = (await streamToPromise(smStream)).toString()

    // Change headers
    res.writeHead(200, {
      'Content-Type': 'application/xml',
    })

    // Display output to user
    res.end(sitemapOutput)
  } catch (e) {
    console.log(e)
    res.send(JSON.stringify(e))
  }
}

export default pagesSitemap
