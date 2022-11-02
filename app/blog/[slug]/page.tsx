import {getAllPosts, getPost} from 'lib/get-posts'
import convertToComponents from 'lib/parse-html'

export const dynamicParams = true

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map(p => ({slug: p.slug}))
}

async function fetchPost({slug}) {
  const post = await getPost(slug)

  return post
}

export default async function Blog({params}) {
  const {slug} = params
  const post = await fetchPost(slug)

  if (!post) return null

  const {title, bodyHTML} = post
  const parsedBody = convertToComponents(bodyHTML)

  return (
    <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
      <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl">{title}</h1>
      <div className="prose">{parsedBody}</div>
    </div>
  )
}
