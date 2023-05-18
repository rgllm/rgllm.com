import {useState} from 'react'
import {InferGetStaticPropsType} from 'next'

import BookmarksList from 'components/BookmarksList'
import Container from '~/Container'
import prisma from 'lib/prisma'
import PageNavigation from 'components/PageNavigation'
import usePagination from 'lib/usePagination'

export default function About({bookmarks}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBookmarks = bookmarks.filter(bookmark =>
    bookmark.title.toLowerCase().includes(searchValue.toLowerCase()),
  )
  const pagination = usePagination(filteredBookmarks, 10)

  return (
    <Container
      title="Bookmarks - Rogério Moreira"
      description="A collection of random links I saved over the years. Mainly for me, feel free to follow this also."
    >
      <div className="flex flex-col w-full max-w-2xl mx-auto mt-0 mb-8">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
          Bookmarks
        </h1>
        <p className="mb-4 text-gray-600">
          A collection of random links I saved over the years. Mainly for me, feel free to follow
          this also.
        </p>
        <div className="relative w-full">
          <input
            aria-label="Search bookmarks"
            type="text"
            onChange={e => setSearchValue(e.target.value)}
            placeholder="Search bookmarks"
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
      </div>
      <div className="flex flex-row items-center justify-center w-full max-w-2xl pb-8 mx-auto my-0 border-gray-200">
        {!pagination.currentData().length && (
          <p className="w-full mb-4 text-gray-600">No bookmarks found.</p>
        )}
        <BookmarksList bookmarks={pagination.currentData()} />
      </div>
      {pagination.numberOfPages > 1 && (
        <PageNavigation
          currentPage={pagination.currentPage}
          lastPage={pagination.numberOfPages}
          setPrev={pagination.prev}
          setNext={pagination.next}
        />
      )}
    </Container>
  )
}

export async function getStaticProps() {
  const allBookmarks = await prisma.bookmark.findMany({
    orderBy: {
      id: 'desc',
    },
  })

  const bookmarks = allBookmarks.map(entry => ({
    id: entry.id.toString(),
    created_at: entry.created_at.toString(),
    title: entry.title,
    description: entry.description,
    favicon: entry.favicon,
    link: entry.link,
  }))

  return {
    props: {
      bookmarks,
    },
    revalidate: 10,
  }
}
