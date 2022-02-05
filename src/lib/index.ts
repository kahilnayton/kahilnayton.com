export const EXAMPLE_PATH = "cms-prismic";
export const SITE_NAME = "music-portfolio";
export const SITE_URL = "https://prismic.io/";
export const HOME_OG_IMAGE_URL = "";
export const YOUTUBE_URL = "https://youtu.be/9EQHdkZib8g";
export const FACEBOOK_URL = "https://www.facebook.com/kahil.nayton";
export const TWITTER_URL = "https://twitter.com/kahilnayton";
export const INSTAGRAM_URL = "https://www.instagram.com/kahilnayton/";
export const NFT_URL = "https://openzeppelin.com/";
export const BANDCAMP_URL = "https://kahilnayton.bandcamp.com/album/bbep";
export const REGIONAL_URL = "https://www.facebook.com/choronyc/";
export const SPOTIFY_URL =
  "https://open.spotify.com/album/0LVM2RH9zHIgVyyrJDSz1H?si=PZ4ua6NdR3mEad0rJo24oQ";

export type LinkType = {
  label: string;
  href: string;
};

export const links: LinkType[] = [
  {
    label: "New Music",
    href: "newmusic",
  },
  {
    label: "NFT",
    href: "nft",
  },
  {
    label: "Choro",
    href: "choro",
  },
  {
    label: "Video",
    href: "video",
  },
  {
    label: "Bandcamp",
    href: "bandcamp",
  },
];

export const data = {
  newmusic: {
    id: "newmusic",
    title: "New Music",
    // image: "/images/sketch.jpg",
    description:
      "Just about to release some new tunes! 2021 was a year of lots of transition and turbulence so writing some new music felt like the best way to get through the whirlwind of change and life upheaval. New music will drop in about a month!",
    link: SPOTIFY_URL,
    linkLable: "Listen",
  },
  choro: {
    id: "choro",
    title: "Choro",
    // image: "/images/beco.jpeg",
    description:
      'Choro (pronounced SHOH-roh) is best described in American terms as "the New Orleans jazz of Brazil." It is a complex popular musical form based on improvisation, and like New Orleans jazz, blues, or ragtime, grew from a formalized musical structure and many worldly influences. But to the people of South America, choro is Brazil. It is life. Our band Regional De NY often plays around NYC, come hang!',
    link: REGIONAL_URL,
    linkLable: "Upcoming gigs",
  },
  nft: {
    id: "nft",
    title: "NFT",
    // image: "/images/nft.jpeg",
    description: `I'm a bit of a crypto nerd and thought it would be fun to tokenize this new release, so if you want to buy some non fungible tokens or if you are interested in the crypto space. I feel like the way streaming is currently set up musos kinda get a rough deal and although it's early days maybe block chain tech can help empower creatives in the future. Happy to chat about the process if you're interested to learn!`,
    link: NFT_URL,
    linkLable: `Learn about NFT's`,
  },
  video: {
    id: "video",
    title: "New Video",
    // image: "/images/vid_preview.jpg",
    description: `Some time ago now, a good mate had an idea for a music clip for one of my songs. The subsequent events that grew out of this idea ended up being quite unexpected… I'll write some more words about it as we finish up because it’s gonna be a tight clip and deserves a place in the world.`,
    link: YOUTUBE_URL,
    linkLable: "Check out some other vids",
  },
  bandcamp: {
    id: "bandcamp",
    title: "Bandcamp",
    // image: "/images/flowers.png",
    description: `Bandcamp is a great way to show some support, not just for this music, but for all musicians. Spitify pays bugger all to artists so if you like someone's music go buy it on Bandcamp. Some of the guys who played on these tracks have some particularly good stuff.`,
    link: BANDCAMP_URL,
    linkLable: "Head to bandcamp",
  },
};
