import Image from 'next/image'
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'

import Container from 'components/Container'
import ProjectCard from 'components/ProjectCard'
import { InferGetStaticPropsType } from 'next'
import { getAllPosts } from 'lib/get-posts'
import prisma from 'lib/prisma'
import BookmarksList from 'components/BookmarksList'
import PostCard from 'components/PostCard'
import { shuffleArray } from 'lib/shuffle'
import { projects } from 'data/projects'

export default function Home({ bookmarks, posts }: InferGetStaticPropsType<typeof getStaticProps>) {
	const postColors = shuffleArray(['bg-green-300', 'bg-red-300', 'bg-blue-300'])
	return (
		<Container>
			<div className="flex flex-col items-start justify-center max-w-2xl pb-16 mx-auto border-gray-200">
				<div className="flex flex-col-reverse items-start sm:flex-row">
					<div className="flex flex-col pr-8">
						<h1 className="mb-1 text-3xl font-bold tracking-tight text-black md:text-5xl">Rogério Moreira</h1>
						<h2 className="mb-4 text-gray-700">
							Software Engineer. Writing code at <span className="font-semibold">Mindera</span>.
						</h2>
						<p className="mb-16 text-gray-600 sm:max-w-[460px]">
							Currently based in Braga, Portugal. You can follow me on{' '}
							<a href="https://twitter.com/rgllm" target="_blank" rel="noopener noreferrer">
								Twitter
							</a>
							, see my code on{' '}
							<a href="https://github.com/rgllm" target="_blank" rel="noopener noreferrer">
								GitHub
							</a>
							, or check my{' '}
							<a href="https://linkedin.com/in/rgllm" target="_blank" rel="noopener noreferrer">
								LinkedIn
							</a>
							. I occasionally blog too.
						</p>
					</div>
					<div className="w-[80px] sm:w-[130px] relative mb-8 sm:mb-0 mr-auto">
						<Image
							alt="Rogério Moreira"
							height={500}
							width={500}
							src="/images/avatar.jpg"
							className="transition-all rounded-full grayscale-0 hover:filter hover:grayscale"
						/>
					</div>
				</div>
				<div className="flex flex-col w-full mb-16">
					<h2 className="mb-6 text-2xl font-bold tracking-tight text-black md:text-4xl">Latest Posts</h2>
					<div className="flex flex-col gap-6 md:flex-row">
						<PostCard bgColor={postColors[0]} {...posts?.[0]} />
						<PostCard bgColor={postColors[1]} {...posts?.[1]} />
						<PostCard bgColor={postColors[2]} {...posts?.[2]} />
					</div>
					<Link href="/blog">
						<a className="flex h-6 mt-8 leading-7 text-gray-600 transition-all rounded-lg hover:text-gray-800">
							View all posts
							<BsArrowRight className="ml-2" />
						</a>
					</Link>
				</div>
				<div className="flex flex-col w-full mb-16">
					<h2 className="mb-6 text-2xl font-bold tracking-tight text-black md:text-4xl">Latest Bookmarks</h2>
					<BookmarksList bookmarks={bookmarks} />
				</div>
				<div className="flex flex-col w-full">
					<h2 className="mb-6 text-2xl font-bold tracking-tight text-black md:text-4xl">Personal Projects</h2>
					{projects.map((project) => (
						<ProjectCard {...project} />
					))}
				</div>
			</div>
		</Container>
	)
}

export async function getStaticProps() {
	const posts = await getAllPosts()
	const bookmarks = await prisma.bookmark.findMany({
		take: 3,
		orderBy: {
			id: 'desc',
		},
	})

	const parsedBookmarks = bookmarks.map((entry) => ({
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
		revalidate: 60,
	}
}
