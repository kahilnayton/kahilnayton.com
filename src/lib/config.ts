export const config = {
  rootUrl: 'https://localhost:3000',
  title: `Kahil Nayton`,
  description: `New music, upcoming gigs and things of that nature`,
  social: {
    graphic:
      'https://pbs.twimg.com/profile_images/542898942036307968/VQUVD2ak_400x400.jpeg',
    twitter: `@kbird`,
  },
  author: {
    name: 'kahil nayton',
    summary: 'https://www.kahilnayton.com/',
  },
  image: `/images/train.jpg`,
  url: `https://www.kahilnayton.com/`,
  siteLanguage: `en-US`,
  siteLocale: `en_us`,
  routes: {
    public: {
      pathAfterFailure: '/',
    },
  },
}
