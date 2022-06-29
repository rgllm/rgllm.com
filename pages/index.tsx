import {FiArrowRight} from 'react-icons/fi'
import Image from 'next/image'
import Link from 'next/link'

import {getAllPosts} from 'lib/get-posts'
import {InferGetStaticPropsType} from 'next'
import {projects} from 'data/projects'
import {shuffleArray} from 'lib/shuffle'
import BookmarksList from 'components/BookmarksList'
import Container from 'components/Container'
import PostCard from 'components/PostCard'
import prisma from 'lib/prisma'
import ProjectCard from 'components/ProjectCard'

export default function Home({bookmarks, posts}: InferGetStaticPropsType<typeof getStaticProps>) {
  const postColors = shuffleArray(['bg-green-300', 'bg-red-300', 'bg-blue-300'])
  return (
    <Container title="Rogério Moreira - Software Engineer, focused on front-end development, living and working from Braga, Portugal.">
      <div className="flex flex-col items-start justify-center max-w-2xl pb-16 md:mx-auto">
        <div className="flex flex-col-reverse items-start sm:flex-row">
          <div className="flex flex-col pr-8">
            <h1 className="mb-1 text-3xl font-bold tracking-tight text-black md:text-5xl">
              Rogério Moreira
            </h1>
            <h2 className="mb-4 text-gray-700">
              Software Engineer. Writing code at <span className="font-semibold">Mindera</span>.
            </h2>
            <p className="mb-16 text-gray-600 md:max-w-[460px]">
              Currently based in Braga, Portugal. You can follow me on{' '}
              <a
                href="https://twitter.com/rgllm"
                target="_blank"
                rel="noopener noreferrer"
                className="umami--click--homepage-twitter"
              >
                Twitter
              </a>
              , see my code on{' '}
              <a
                href="https://github.com/rgllm"
                target="_blank"
                rel="noopener noreferrer"
                className="umami--click--homepage-github"
              >
                GitHub
              </a>
              , or check my{' '}
              <a
                href="https://linkedin.com/in/rgllm"
                target="_blank"
                rel="noopener noreferrer"
                className="umami--click--homepage-linkedin"
              >
                LinkedIn
              </a>
              . I occasionally blog too.
            </p>
          </div>
          <div className="w-[80px] sm:w-[130px] relative mb-8 sm:mb-0 mr-auto">
            <Image
              height={130}
              width={130}
              src="/images/avatar.jpg"
              className="w-[80px] h-[80px] sm:w-[130px] sm:h-[130px] transition-all rounded-full grayscale-0 hover:filter hover:grayscale"
              alt="Photo of Rogério Moreira"
            />
          </div>
        </div>
        <div className="flex flex-col w-full mb-16">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-black md:text-4xl">
            Latest Posts
          </h2>
          <div className="flex flex-col gap-6 md:flex-row">
            <PostCard bgColor={postColors[0]} {...posts?.[0]} />
            <PostCard bgColor={postColors[1]} {...posts?.[1]} />
            <PostCard bgColor={postColors[2]} {...posts?.[2]} />
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center pt-5 font-medium leading-5 text-gray-700 animatedArrow umami--click--home-view-all-posts"
          >
            <>
              View all posts{' '}
              <FiArrowRight className="arrow text-gray-700 mt-[2px] ml-[4px] max-w-[18px]" />
            </>
          </Link>
        </div>
        <div className="flex flex-col w-full mb-8">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-black md:text-4xl">
            Personal Projects
          </h2>
          <ul role="list" className="w-full divide-y divide-gray-200">
            {projects.map(project => (
              <ProjectCard key={project.name} {...project} />
            ))}
          </ul>
        </div>
        <div className="flex flex-col w-full">
          <h2 className="mb-12 text-2xl font-bold tracking-tight text-black md:text-4xl">
            Latest Bookmarks
          </h2>
          <BookmarksList bookmarks={bookmarks} />
          <Link
            href="/bookmarks"
            className="inline-flex items-center pt-10 font-medium leading-5 text-gray-700 animatedArrow umami--click--home-view-all-bookmarks"
          >
            <>
              View all bookmarks{' '}
              <FiArrowRight className="arrow text-gray-700 mt-[2px] ml-[4px] max-w-[18px]" />
            </>
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
