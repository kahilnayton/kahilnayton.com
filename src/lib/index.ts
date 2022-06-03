export const EXAMPLE_PATH = 'cms-prismic'
export const SITE_NAME = 'music-portfolio'
export const SITE_URL = 'https://prismic.io/'
export const HOME_OG_IMAGE_URL = ''
export const YOUTUBE_URL = 'https://youtu.be/9EQHdkZib8g'
export const FACEBOOK_URL = 'https://www.facebook.com/kahil.nayton'
export const TWITTER_URL = 'https://twitter.com/kahilnayton'
export const INSTAGRAM_URL = 'https://www.instagram.com/kahilnayton/'
export const NFT_URL = 'https://openzeppelin.com/'
export const BANDCAMP_URL = 'https://kahilnayton.bandcamp.com/album/bbep'
export const REGIONAL_URL = 'https://www.facebook.com/choronyc/'
export const SPOTIFY_URL =
  'https://open.spotify.com/album/0LVM2RH9zHIgVyyrJDSz1H?si=PZ4ua6NdR3mEad0rJo24oQ'

export type LinkType = Record<string, string>

export const links: LinkType[] = [
  {
    label: 'Original Music',
    href: 'newmusic',
  },
  {
    label: 'Choro (Brazilian Music)',
    href: 'choro',
  },
  {
    label: 'Video',
    href: 'video',
  },
  {
    label: 'Bandcamp',
    href: 'bandcamp',
  },
  {
    label: 'NFT',
    href: 'nft',
  },
]

export const data = {
  newmusic: {
    id: 'newmusic',
    title: 'New Music',
    imageSrc: '/images/SVG/sketch-01.svg',
    description:
      'New single dropping very soon! 2021 was a year of lots of transition and writing some new music felt like the best way to get through the whirlwind of change and life upheaval. You can check out some other tunes on Spotify in the meantime.',
    link: SPOTIFY_URL,
    linkLable: 'Listen',
    reverse: false,
  },
  choro: {
    id: 'choro',
    title: 'Choro',
    imageSrc: '/images/SVG/choro.svg',
    description:
      'Choro (pronounced SHOH-roh) is best described in American terms as "the New Orleans jazz of Brazil." It is a complex popular musical form based on improvisation, and like New Orleans jazz, blues, or ragtime, grew from a formalized musical structure and many worldly influences. But to the people of South America, choro is Brazil. It is life. Our band Regional De NY often plays around NYC, come hang!',
    link: REGIONAL_URL,
    linkLable: 'Upcoming gigs',
    reverse: true,
  },
  nft: {
    id: 'nft',
    title: 'NFT',
    imageSrc: '/images/SVG/nft.svg',
    description: `It’s still early days for Non Fungible Tokens and who knows if it’ll be the new platform for artists to release their creative works on, but one thing I’ve noticed is the lack of representation smaller and marginalized groups get within the space. This project will support this issue by giving local acts a platform to release their music as an NFT. Coming soon will be a series of featured artists and groups and a place to explore and own a part of the great new music coming out of Brooklyn.`,
    link: NFT_URL,
    linkLable: `Learn about NFT's`,
    reverse: false,
  },
  video: {
    id: 'video',
    title: 'New Video',
    imageSrc: '/images/SVG/vid_preview.svg',
    description: `Some time ago a good mate had an idea for a music clip for one of my songs. The subsequent events from this video clip became quite the story. We’re going to have some clips coming soon and take you down the rabbithole involving a mushroom, months of psychiatric counseling and reconnecting with an old mate.`,
    link: YOUTUBE_URL,
    linkLable: 'Check out some other vids',
    reverse: true,
  },
  bandcamp: {
    id: 'bandcamp',
    title: 'Bandcamp',
    imageSrc: '/images/SVG/flowers.svg',
    description: `Bandcamp is a great way to show some support, not just for this music, but for all musicians. Spotify pays bugger all to artists so if you like someone's music go buy it on Bandcamp. Some of the guys who played on these tracks have some particularly good stuff.`,
    link: BANDCAMP_URL,
    linkLable: 'Head to bandcamp',
    reverse: false,
  },
}
