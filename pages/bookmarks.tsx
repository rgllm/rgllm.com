import prisma from 'lib/prisma'
import Container from 'components/Container'
import { InferGetStaticPropsType } from 'next'
import BookmarksList from 'components/BookmarksList'

export default function About({ bookmarks }: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<Container
			title="Bookmarks - Rogério Moreira"
			description="A collection of random links saved by me over the years. Mainly for me, feel free to follow this also.">
			<div className="flex w-full max-w-2xl mx-auto mt-0 mb-16">
				<h1 className="text-3xl font-bold tracking-tight text-black md:text-5xl">Bookmarks</h1>
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
		revalidate: 60,
	}
}
