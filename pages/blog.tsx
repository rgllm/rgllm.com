import {useState} from 'react'

import {getAllPosts} from 'lib/get-posts'
import BlogPost from 'components/BlogPost'
import Container from '~/Container'
import type {InferGetStaticPropsType} from 'next'

export default function Blog({posts}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((post: any) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase()),
  )

  return (
    <Container title="Blog - Rogério Moreira">
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl">Writing</h1>
        <p className="mb-4 text-gray-600 ">
          Thinking out loud about software engineering, product development and life in general. No
          writer can generate profound insights on a fixed schedule, so you won't find here frequent
          updates.
        </p>
        <div className="relative w-full mb-4">
          <input
            aria-label="Search posts"
            type="text"
            onChange={e => setSearchValue(e.target.value)}
            placeholder="Search posts"
            className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-200 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
          <svg
            className="absolute w-5 h-5 text-gray-400 right-3 top-3 "
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        {!filteredBlogPosts.length && <p className="w-full mb-4 text-gray-600">No posts found.</p>}
        {filteredBlogPosts.map((post: any) => (
          <BlogPost key={post.id} {...post} />
        ))}
      </div>
    </Container>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts()

  return {
    props: {
      posts,
    },
    revalidate: 60,
  }
}
