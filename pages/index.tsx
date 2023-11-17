import {FiArrowRight} from 'react-icons/fi'
import Link from 'next/link'

import {getAllPosts} from 'lib/get-posts'
import {InferGetStaticPropsType} from 'next'
import BookmarksList from 'components/BookmarksList'
import Container from '~/Container'
import PostCard from 'components/PostCard'
import prisma from 'lib/prisma'

export default function Home({bookmarks, posts}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container title="Rogério Moreira - Software Engineer, focused on front-end development, living and working from Braga, Portugal.">
      <div className="flex flex-col items-start justify-center max-w-2xl md:mx-auto">
        <div className="flex flex-col-reverse items-start sm:flex-row">
          <div className="flex flex-col pr-8">
            <h1 className="mb-1 text-lg font-semibold tracking-tight text-gray-900">
              Rogério Moreira
            </h1>
            <p className="mt-4 mb-8 text-gray-600 text-md">
              I am a software engineer focused in front-end development, based in Portugal.
              Currently working at Mindera.
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full mb-8">
          <h2 className="mb-4 text-lg font-semibold tracking-tight text-gray-900">Posts</h2>
          <div>
            <PostCard {...posts?.[0]} />
            <PostCard {...posts?.[1]} />
            <PostCard {...posts?.[2]} />
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center font-medium leading-5 text-gray-600 animatedArrow"
          >
            View all posts{' '}
            <FiArrowRight className="arrow text-gray-600 mt-[2px] ml-[4px] max-w-[18px]" />
          </Link>
        </div>
        <div className="flex flex-col w-full">
          <h2 className="mb-6 text-lg font-semibold tracking-tight text-gray-900">Bookmarks</h2>
          <BookmarksList bookmarks={bookmarks} />
          <Link
            href="/bookmarks"
            className="inline-flex items-center pt-10 font-medium leading-5 text-gray-600 animatedArrow"
          >
            View all bookmarks{' '}
            <FiArrowRight className="arrow text-gray-600 mt-[2px] ml-[4px] max-w-[18px]" />
          </Link>
        </div>
      </div>
    </Container>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts()
  const bookmarks = await prisma.bookmark.findMany({
    take: 5,
    orderBy: {
      id: 'desc',
    },
    cacheStrategy: { ttl: 30 }
  })

  const parsedBookmarks = bookmarks.map(entry => ({
    id: entry.id.toString(),
    created_at: entry.created_at.toString(),
    title: entry.title,
    description: entry.description,
    favicon: entry.favicon,
    link: entry.link,
  }))

  return {
    props: {
      posts: posts.slice(0, 3),
      bookmarks: parsedBookmarks,
    },
    revalidate: 30,
  }
}
