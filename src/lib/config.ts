export const config = {
  rootUrl: 'http://localhost:5000',
  title: `Kahil Nayton music`,
  description: `New music, upcoming gigs and things of that nature`,
  social: {
    graphic:
      'https://pbs.twimg.com/profile_images/542898942036307968/VQUVD2ak_400x400.jpeg',
    twitter: `@kbird`,
  },
  author: {
    name: 'kahil nayton',
    summary: 'http://www.kahilnayton.com/',
  },
  image: `src/images/train.jpg`,
  url: `http://www.kahilnayton.com/`,
  siteLanguage: `en-US`,
  siteLocale: `en_us`,
  routes: {
    public: {
      pathAfterFailure: '/',
    },
  },
}
