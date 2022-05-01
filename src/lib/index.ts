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
    label: 'New Music',
    href: 'newmusic',
  },
  {
    label: 'NFT',
    href: 'nft',
  },
  {
    label: 'Choro',
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
    label: 'About',
    page: '/about',
  },
]

export const data = {
  newmusic: {
    id: 'newmusic',
    title: 'New Music',
    imageSrc: '/images/SVG/sketch-01.svg',
    description:
      'Just about to release some new tunes! 2021 was a year of lots of transition and turbulence so writing some new music felt like the best way to get through the whirlwind of change and life upheaval. New music will drop in about a month!',
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
    description: `I'm a bit of a crypto nerd and thought it would be fun to tokenize this new release, so if you want to buy some non fungible tokens or if you are interested in the crypto space. I feel like the way streaming is currently set up musos kinda get a rough deal and although it's early days maybe block chain tech can help empower creatives in the future. Happy to chat about the process if you're interested to learn!`,
    link: NFT_URL,
    linkLable: `Learn about NFT's`,
    reverse: false,
  },
  video: {
    id: 'video',
    title: 'New Video',
    imageSrc: '/images/SVG/vid_preview.svg',
    description: `Some time ago now, a good mate had an idea for a music clip for one of my songs. The subsequent events that grew out of this idea ended up being quite unexpected… I'll write some more words about it as we finish up because it’s gonna be a tight clip and deserves a place in the world.`,
    link: YOUTUBE_URL,
    linkLable: 'Check out some other vids',
    reverse: true,
  },
  bandcamp: {
    id: 'bandcamp',
    title: 'Bandcamp',
    imageSrc: '/images/SVG/flowers.svg',
    description: `Bandcamp is a great way to show some support, not just for this music, but for all musicians. Spitify pays bugger all to artists so if you like someone's music go buy it on Bandcamp. Some of the guys who played on these tracks have some particularly good stuff.`,
    link: BANDCAMP_URL,
    linkLable: 'Head to bandcamp',
    reverse: false,
  },
}
export const about = [
  'As to be expected after spending about 6 years in NYC after moving there from Australia I was feeling the need to reconnect with home and family. The obvious way to do that since there was half a world between us was to start writing some music with my sister, so in 2018 popped into the Avery studio while on a trip back in Melbourne. We tracked the better part of 3 tracks, called the project Bonds and I went ahead and finished up the production in NYC. The result of this was some pretty raw original music, but it has a vibe and I dig it. I had never really gone through the process of releasing original music before where I was doing a good bit of the singing, writing and playing of the instrucments and it left me keen to pick up the guitar and keep writing.',
  'The next time round',
]
