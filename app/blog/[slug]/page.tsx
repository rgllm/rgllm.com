import {getAllPosts, getPost} from 'lib/get-posts'
import Container from '~/Container'
import convertToComponents from 'lib/parse-html'

export const dynamicParams = true

export async function generateStaticParams() {
  const posts = await getAllPosts()

  return posts.map(p => ({params: {slug: p.slug}}))
}

async function fetchPost({params}) {
  const post = await getPost(params.slug)

  return post
}

export default async function Blog({params}) {
  const post = await fetchPost(params)

  if (!post?.title) return <></>

  const {title, bodyHTML, description, date} = post
  const parsedBody = convertToComponents(bodyHTML)

  return (
    <Container title={`${title} - Rogério Moreira`} description={`${description}`} date={date}>
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl">{title}</h1>
        <div className="prose">{parsedBody}</div>
      </div>
    </Container>
  )
}

export async function getStaticPaths() {
  const posts = await getAllPosts()

  return {
    paths: posts.map(p => ({params: {slug: p.slug}})),
    fallback: true,
  }
}
