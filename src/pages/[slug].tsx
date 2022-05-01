import fs from 'fs'
import matter from 'gray-matter'
import md from 'markdown-it'
import Hero from 'components/_ui/Hero'
import SubNav from 'components/sections/SubNav'
import { links, about } from 'lib'
import { Inner } from 'styles/structure'
import SEO from '@/components/SEO'

export async function getStaticPaths() {
  const files = fs.readdirSync('posts')
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', ''),
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }: any) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8')
  const { data: frontmatter, content } = matter(fileName)
  return {
    props: {
      frontmatter,
      content,
    },
  }
}

export default function PostPage({ frontmatter, content }: any) {
  return (
    <>
      <SEO openGraphType="website" schemaType="about" description={about[0]} />
      <Hero />
      <SubNav links={links} />
      <Inner>
        <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
      </Inner>
    </>
  )
}
