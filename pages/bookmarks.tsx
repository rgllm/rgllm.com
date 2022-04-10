import { InferGetStaticPropsType } from 'next'

import BookmarksList from 'components/BookmarksList'
import Container from 'components/Container'
import prisma from 'lib/prisma'

export default function About({ bookmarks }: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<Container
			title="Bookmarks - Rogério Moreira"
			description="A collection of random links I saved over the years. Mainly for me, feel free to follow this also.">
			<div className="flex flex-col w-full max-w-2xl mx-auto mt-0 mb-16">
				<h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl">Bookmarks</h1>
				<p className="text-gray-600 ">
					A collection of random links I saved over the years. Mainly for me, feel free to follow this also.
				</p>
			</div>
			<div className="flex flex-row items-center justify-center w-full max-w-2xl pb-16 mx-auto my-0 border-gray-200">
				<BookmarksList bookmarks={bookmarks} />
			</div>
		</Container>
	)
}

export async function getStaticProps() {
	const allBookmarks = await prisma.bookmark.findMany({
		orderBy: {
			id: 'desc',
		},
	})

	const bookmarks = allBookmarks.map((entry) => ({
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
		revalidate: 30,
	}
}
